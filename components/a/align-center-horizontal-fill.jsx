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
		"content": `<style>.qt2b00bir {
  fill: currentColor;
  d: path("M224 152v40a16 16 0 0 1-16 16h-72v16a8 8 0 0 1-16 0v-16H48a16 16 0 0 1-16-16v-40a16 16 0 0 1 16-16h72v-16H72a16 16 0 0 1-16-16V64a16 16 0 0 1 16-16h48V32a8 8 0 0 1 16 0v16h48a16 16 0 0 1 16 16v40a16 16 0 0 1-16 16h-48v16h72a16 16 0 0 1 16 16");
}
</style><path class="qt2b00bir"/>`,
		"fallback": "ph:align-center-horizontal-fill",
	});
}

export default Component;
