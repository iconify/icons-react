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
		"content": `<style>.qgeoeq86t {
  fill: currentColor;
  d: path("M232 200a8 8 0 0 1-16 0a88.1 88.1 0 0 0-88-88H88v40a8 8 0 0 1-13.66 5.66l-48-48a8 8 0 0 1 0-11.32l48-48A8 8 0 0 1 88 56v40h40a104.11 104.11 0 0 1 104 104");
}
</style><path class="qgeoeq86t"/>`,
		"fallback": "ph:arrow-bend-up-left-fill",
	});
}

export default Component;
