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
		"content": `<style>.a36_q16bd {
  d: path("M3.5 3h17a1 1 0 0 1 1 1a1 1 0 0 1-1 1h-17a1 1 0 0 1-1-1a1 1 0 0 1 1-1m0 2v16.5M20.5 5v16.5M6.5 18H6v-2.5a1 1 0 0 1 1-1h1.25l1.75-3h4l1.75 3H17a1 1 0 0 1 1 1V18h-.5m-7 0h3");
}

.b0b3v9bnv {
  d: path("M6.75 18a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m7 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="a36_q16bd"/><path class="b0b3v9bnv"/></g>`,
		"fallback": "uix:carport",
	});
}

export default Component;
