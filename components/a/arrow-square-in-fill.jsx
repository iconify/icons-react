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
		"content": `<style>.t8l2gh08s {
  fill: currentColor;
  d: path("M128 136v64a8 8 0 0 1-13.66 5.66L88 179.31l-42.34 42.35a8 8 0 0 1-11.32-11.32L76.69 168l-26.35-26.34A8 8 0 0 1 56 128h64a8 8 0 0 1 8 8m80-104H80a16 16 0 0 0-16 16v48a8 8 0 0 0 16 0V48h128v128h-48a8 8 0 0 0 0 16h48a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16");
}
</style><path class="t8l2gh08s"/>`,
		"fallback": "ph:arrow-square-in-fill",
	});
}

export default Component;
