import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.dtzxwi1sk {
  fill: currentColor;
  d: path("M24.707 3.293a1 1 0 0 1 0 1.414L6.414 23H15a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1V13a1 1 0 1 1 2 0v8.586L23.293 3.293a1 1 0 0 1 1.414 0");
}
</style><path class="dtzxwi1sk"/>`,
		"fallback": "fluent:arrow-down-left-28-filled",
	});
}

export default Component;
