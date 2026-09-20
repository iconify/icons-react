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
		"content": `<style>.ryof_6pvt {
  fill: currentColor;
  d: path("M8.827 11.596h6.346L12 8.404zM5 19h14v-3H5zm0-4h14V5H5zm0 1v3zm-1 4V4h16v16z");
}
</style><path class="ryof_6pvt"/>`,
		"fallback": "material-symbols-light:bottom-panel-open-outline-sharp",
	});
}

export default Component;
