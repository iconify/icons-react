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
		"content": `<style>.jcig4fbmm {
  fill: currentColor;
  d: path("M3 20L3 11C3 10.4477 3.4477 10 4 10L6 10L6 4C6 3.4477 6.4477 3 7 3L17 3C17.5523 3 18 3.4477 18 4L18 10L20 10C20.5523 10 21 10.4477 21 11L21 20C21 20.5523 20.5523 21 20 21L4 21C3.4477 21 3 20.5523 3 20ZM5 12L5 14L19 14L19 12L5 12Z");
}
</style><path class="jcig4fbmm"/>`,
		"fallback": "keyline-icons:bed-single-sharp-fill",
	});
}

export default Component;
