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
		"content": `<style>.ok6q6rb9u {
  fill: currentColor;
  d: path("M6 21a1 1 0 1 0 0-2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1a1 1 0 0 0 0-2a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3m7-16a1 1 0 1 0 0-2h-2a1 1 0 1 0 0 2zm6 6a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0zm-5 9a1 1 0 0 1-1 1h-2a1 1 0 1 1 0-2h2a1 1 0 0 1 1 1m4-17a1 1 0 1 0 0 2a1 1 0 0 1 1 1a1 1 0 1 0 2 0a3 3 0 0 0-3-3m-1 17a1 1 0 0 0 1 1a3 3 0 0 0 3-3a1 1 0 1 0-2 0a1 1 0 0 1-1 1a1 1 0 0 0-1 1");
}
</style><path class="ok6q6rb9u"/>`,
		"fallback": "fluent:border-left-24-filled",
	});
}

export default Component;
