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
		"content": `<style>.roaeokbhf {
  fill: currentColor;
  d: path("M48 80v96a8 8 0 0 1-16 0V80a8 8 0 0 1 16 0m189.66 42.34l-96-96A8 8 0 0 0 128 32v40H72a8 8 0 0 0-8 8v96a8 8 0 0 0 8 8h56v40a8 8 0 0 0 13.66 5.66l96-96a8 8 0 0 0 0-11.32");
}
</style><path class="roaeokbhf"/>`,
		"fallback": "ph:arrow-fat-line-right-fill",
	});
}

export default Component;
