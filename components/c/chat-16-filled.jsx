import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.qs-7yhf8r {
  fill: currentColor;
  d: path("M8 1a7 7 0 1 1-3.538 13.04l-2.804.935a.5.5 0 0 1-.633-.633l.934-2.806A7 7 0 0 1 8 1M5.5 9a.5.5 0 0 0 0 1h3a.5.5 0 1 0 0-1zm0-3a.5.5 0 0 0 0 1h5a.5.5 0 1 0 0-1z");
}
</style><path class="qs-7yhf8r"/>`,
		"fallback": "fluent:chat-16-filled",
	});
}

export default Component;
