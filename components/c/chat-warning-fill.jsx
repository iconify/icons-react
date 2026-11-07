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
		"content": `<style>.tvevqc0ij {
  fill: currentColor;
  d: path("M8 18c-.468 0-.98.395-1.293.707l-2 2a1.36 1.36 0 0 1-1.186.382C2.572 20.928 2 19.898 2 19V5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3Zm5-8V7a1 1 0 0 0-2 0v3a1 1 0 0 0 2 0m-.99 2H12a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2");
}
</style><path class="tvevqc0ij"/>`,
		"fallback": "coolicons:chat-warning-fill",
	});
}

export default Component;
