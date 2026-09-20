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
		"content": `<style>.knkqnkbcd {
  fill: currentColor;
  d: path("M223.39 83.06A8 8 0 0 1 216 88h-40v80a64 64 0 0 1-128 0V80a8 8 0 0 1 16 0v88a48 48 0 0 0 96 0V88h-40a8 8 0 0 1-5.66-13.66l48-48a8 8 0 0 1 11.32 0l48 48a8 8 0 0 1 1.73 8.72");
}
</style><path class="knkqnkbcd"/>`,
		"fallback": "ph:arrow-u-right-up-fill",
	});
}

export default Component;
