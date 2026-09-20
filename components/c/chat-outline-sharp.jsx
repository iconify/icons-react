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
		"content": `<style>.e_utjtbdl {
  fill: currentColor;
  d: path("M2 22V2h20v16H6zm3.15-6H20V4H4v13.125zM4 16V4zm2-2h8v-2H6zm0-3h12V9H6zm0-3h12V6H6z");
}
</style><path class="e_utjtbdl"/>`,
		"fallback": "material-symbols:chat-outline-sharp",
	});
}

export default Component;
