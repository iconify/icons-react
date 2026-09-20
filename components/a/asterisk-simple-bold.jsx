import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.d2txt0uuo {
  fill: currentColor;
  d: path("m212.45 107.14l-65.19 26.08l46.21 59.41a12 12 0 1 1-18.94 14.74L128 147.55l-46.53 59.82a12 12 0 0 1-18.94-14.74l46.21-59.41l-65.19-26.08a12 12 0 1 1 8.91-22.28L116 110.28V40a12 12 0 0 1 24 0v70.28l63.54-25.42a12 12 0 1 1 8.91 22.28");
}
</style><path class="d2txt0uuo"/>`,
		"fallback": "ph:asterisk-simple-bold",
	});
}

export default Component;
