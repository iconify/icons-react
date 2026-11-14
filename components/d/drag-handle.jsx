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
		"content": `<style>.tb8udbzkk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 5.5a1 1 0 1 0 2 0a1 1 0 1 0-2 0m6 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0M8 12a1 1 0 1 0 2 0a1 1 0 1 0-2 0m6 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0m-6 6.5a1 1 0 1 0 2 0a1 1 0 1 0-2 0m6 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0");
}
</style><path class="tb8udbzkk"/>`,
		"fallback": "uix:drag-handle",
	});
}

export default Component;
