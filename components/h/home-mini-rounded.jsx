import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.fwn62jbxm {
  fill: currentColor;
  d: path("M15.7 5.463q1.8.462 3.2 1.35T21.15 9t.85 3H2q0-1.7.85-3T5.1 6.813t3.2-1.35T12 5t3.7.463M9 19q-2.35 0-4.187-1.388T2.3 14h19.4q-.675 2.225-2.512 3.613T15 19z");
}
</style><path class="fwn62jbxm"/>`,
		"fallback": "material-symbols:home-mini-rounded",
	});
}

export default Component;
