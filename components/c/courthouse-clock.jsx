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
		"content": `<style>.a6k62accz {
  d: path("M18 16.5V18l1.25 1");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qta8--gtl {
  d: path("m7.25 5.75l3.873-2.242a1.75 1.75 0 0 1 1.754 0L16.75 5.75a1.474 1.474 0 0 1-.739 2.75H7.989a1.474 1.474 0 0 1-.739-2.75M2.5 20.5h10M6 8.5v9m4.5-9v9m4.5-9v4.2m4-4.2V12m-4.25 6a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0");
}
</style><g class="hntgybcog"><path class="qta8--gtl"/><path class="a6k62accz"/></g>`,
		"fallback": "uix:courthouse-clock",
	});
}

export default Component;
