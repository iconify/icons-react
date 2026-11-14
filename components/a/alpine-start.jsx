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
		"content": `<style>.c6trv8vvj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 20.5L9.5 7l4.5 8l2.25-2l5.25 7.5ZM18.75 3.75a3.5 3.5 0 1 0 2 4.5a2.75 2.75 0 0 1-2-4.5");
}
</style><path class="c6trv8vvj"/>`,
		"fallback": "uix:alpine-start",
	});
}

export default Component;
