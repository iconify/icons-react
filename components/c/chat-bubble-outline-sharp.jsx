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
		"content": `<style>.e_uyhsbvd {
  fill: currentColor;
  d: path("M3 20.077V3h18v14H6.077zM5.65 16H20V4H4v13.644zM4 16V4z");
}
</style><path class="e_uyhsbvd"/>`,
		"fallback": "material-symbols-light:chat-bubble-outline-sharp",
	});
}

export default Component;
