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
		"content": `<style>.ubmnd0bhf {
  fill: currentColor;
  d: path("M5 19h10V5H5zm-1 1V4h16v16z");
}
</style><path class="ubmnd0bhf"/>`,
		"fallback": "material-symbols-light:dock-to-left-sharp",
	});
}

export default Component;
