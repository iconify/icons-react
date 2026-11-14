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
		"content": `<style>.mfjzwbb1p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 11q5-2 10 0v8.5a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 7 19.5Zm5-8.75c2.5 2.5 2.5 5 0 5s-2.5-2.5 0-5M5 3.5l2 2m12-2l-2 2");
}
</style><path class="mfjzwbb1p"/>`,
		"fallback": "uix:candle-led",
	});
}

export default Component;
