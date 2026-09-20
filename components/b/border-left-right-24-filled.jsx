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
		"content": `<style>.fu01bdbwc {
  fill: currentColor;
  d: path("M17 4a1 1 0 0 1 1-1a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3a1 1 0 1 1 0-2a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1a1 1 0 0 1-1-1m-4 1a1 1 0 1 0 0-2h-2a1 1 0 1 0 0 2zm0 14a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2zM6 3a1 1 0 1 1 0 2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1a1 1 0 1 1 0 2a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3");
}
</style><path class="fu01bdbwc"/>`,
		"fallback": "fluent:border-left-right-24-filled",
	});
}

export default Component;
