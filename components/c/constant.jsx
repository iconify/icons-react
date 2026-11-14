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
		"content": `<style>.rzog80b8c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.75 10h6.5a5.25 5.25 0 0 1 5.25 5.25v1a5.25 5.25 0 0 1-5.25 5.25h-6.5a5.25 5.25 0 0 1-5.25-5.25v-1A5.25 5.25 0 0 1 8.75 10M7.5 10V7a4.5 4.5 0 0 1 9 0v3M9 14.25h6m-6 3h6");
}
</style><path class="rzog80b8c"/>`,
		"fallback": "uix:constant",
	});
}

export default Component;
