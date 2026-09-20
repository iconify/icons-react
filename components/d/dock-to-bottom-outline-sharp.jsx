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
		"content": `<style>.rvrfndvrn {
  fill: currentColor;
  d: path("M5 19h14v-3H5zm0-4h14V5H5zm0 1v3zm-1 4V4h16v16z");
}
</style><path class="rvrfndvrn"/>`,
		"fallback": "material-symbols-light:dock-to-bottom-outline-sharp",
	});
}

export default Component;
