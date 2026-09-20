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
		"content": `<style>.tx7508bmk {
  fill: currentColor;
  d: path("M224 120a40 40 0 0 1-40-40a8 8 0 0 0-8-8a40 40 0 0 1-40-40a8 8 0 0 0-8-8a104 104 0 1 0 104 104a8 8 0 0 0-8-8M75.51 99.51a12 12 0 1 1 0 17a12 12 0 0 1 0-17m25 73a12 12 0 1 1 0-17a12 12 0 0 1-.02 16.98Zm23-40a12 12 0 1 1 17 0a12 12 0 0 1-17-.02Zm41 48a12 12 0 1 1 0-17a12 12 0 0 1-.02 16.98Z");
}
</style><path class="tx7508bmk"/>`,
		"fallback": "ph:cookie-fill",
	});
}

export default Component;
