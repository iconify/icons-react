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
		"content": `<style>.p64v6xbjm {
  fill: currentColor;
  d: path("m3.707 1.293l19 19a.999.999 0 1 1-1.414 1.414L17.586 18H8c-.468 0-.98.395-1.293.707l-2 2a1.36 1.36 0 0 1-1.186.382C2.572 20.928 2 19.898 2 19V5c0-.696.239-1.367.681-1.904l-.388-.389a.999.999 0 1 1 1.414-1.414M21.65 16.407L7.243 2H19a3 3 0 0 1 3 3v10c0 .49-.12.974-.35 1.407");
}
</style><path class="p64v6xbjm"/>`,
		"fallback": "coolicons:chat-off-fill",
	});
}

export default Component;
