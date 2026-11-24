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
		"content": `<style>.wfhfacb6t {
  fill: currentColor;
  d: path("M10 11v6a1 1 0 0 1-1 1H8c-.468 0-.98.395-1.293.707l-2 2a1.36 1.36 0 0 1-1.186.382C2.572 20.928 2 19.898 2 19V5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v4a1 1 0 0 1-1 1H11a.997.997 0 0 0-1 1m3 4h8a1 1 0 0 1 0 2h-8a1 1 0 0 1 0-2");
}
</style><path class="wfhfacb6t"/>`,
		"fallback": "coolicons:chat-minus-corner-fill",
	});
}

export default Component;
