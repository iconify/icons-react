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
		"content": `<style>.i30i7ubgi {
  fill: currentColor;
  d: path("M14 4a1 1 0 0 1-1 1h-2a1 1 0 1 1 0-2h2a1 1 0 0 1 1 1m-9 7a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0zm14 0a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0zm-6 10a1 1 0 1 0 0-2h-2a1 1 0 1 0 0 2zM7 4a1 1 0 0 0-1-1a3 3 0 0 0-3 3a1 1 0 0 0 2 0a1 1 0 0 1 1-1a1 1 0 0 0 1-1m11-1a1 1 0 1 0 0 2a1 1 0 0 1 1 1a1 1 0 1 0 2 0a3 3 0 0 0-3-3M7 20a1 1 0 0 1-1 1a3 3 0 0 1-3-3a1 1 0 1 1 2 0a1 1 0 0 0 1 1a1 1 0 0 1 1 1m11 1a1 1 0 1 1 0-2a1 1 0 0 0 1-1a1 1 0 1 1 2 0a3 3 0 0 1-3 3");
}
</style><path class="i30i7ubgi"/>`,
		"fallback": "fluent:border-none-24-filled",
	});
}

export default Component;
