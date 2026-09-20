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
		"content": `<style>.y-l9iveag {
  fill: currentColor;
  d: path("M9.713 1.962a3.25 3.25 0 0 1 4.597 0l7.749 7.75a3.25 3.25 0 0 1 0 4.597l-7.75 7.75a3.25 3.25 0 0 1-4.596 0l-7.75-7.75a3.25 3.25 0 0 1 0-4.597zm6.068 6.258a.75.75 0 0 0-1.06 0L12 10.94L9.28 8.22a.75.75 0 0 0-1.06 1.06L10.94 12l-2.72 2.72a.75.75 0 0 0 1.06 1.06L12 13.06l2.72 2.72a.75.75 0 0 0 1.06-1.06L13.06 12l2.72-2.72a.75.75 0 0 0 0-1.06");
}
</style><path class="y-l9iveag"/>`,
		"fallback": "fluent:diamond-dismiss-24-filled",
	});
}

export default Component;
