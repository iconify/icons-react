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
		"content": `<style>.heeg586ow {
  fill: currentColor;
  d: path("M2 5a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H8c-.468 0-.98.395-1.293.707l-2 2a1.36 1.36 0 0 1-1.186.382C2.572 16.928 2 15.898 2 15Zm20 6v8c0 .898-.572 1.928-1.521 2.089a1.34 1.34 0 0 1-1.186-.382l-2-2C16.98 18.395 16.468 18 16 18H9a1 1 0 0 1 0-2h7c1.039 0 1.992.578 2.707 1.293L20 18.586V11a1 1 0 0 0-1-1a1 1 0 0 1 0-2a3 3 0 0 1 3 3");
}
</style><path class="heeg586ow"/>`,
		"fallback": "coolicons:chat-conversation-fill",
	});
}

export default Component;
