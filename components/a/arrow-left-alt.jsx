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
		"content": `<style>.lppkb600w {
  fill: currentColor;
  d: path("m10 18l-6-6l6-6l1.4 1.45L7.85 11H20v2H7.85l3.55 3.55z");
}
</style><path class="lppkb600w"/>`,
		"fallback": "material-symbols:arrow-left-alt",
	});
}

export default Component;
