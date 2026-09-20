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
		"content": `<style>.k5hlx-bla {
  fill: currentColor;
  d: path("M16 19L5 12l11-7zm-2-3.65v-6.7L8.75 12z");
}
</style><path class="k5hlx-bla"/>`,
		"fallback": "material-symbols:arrow-back-2-outline",
	});
}

export default Component;
