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
		"content": `<style>.xa_xhkb8q {
  fill: currentColor;
  d: path("m7.414 18l-3.707 3.707A1 1 0 0 1 2 21V3a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1ZM16 7H8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2m-3 4H8a1 1 0 0 0 0 2h5a1 1 0 0 0 0-2");
}
</style><path class="xa_xhkb8q"/>`,
		"fallback": "coolicons:chat-text-fill-sharp",
	});
}

export default Component;
