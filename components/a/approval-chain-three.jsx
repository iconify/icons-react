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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.km8erwbdt {
  d: path("M2.5 12a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0M8 12a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m5.5 0a4 4 0 1 0 8 0a4 4 0 1 0-8 0m-8 0H8m3 0h2.5");
}

.pie5a-bng {
  d: path("M15.75 12.25L17 13.5l2.25-2.25");
}
</style><g class="hntgybcog"><path class="km8erwbdt"/><path class="pie5a-bng"/></g>`,
		"fallback": "uix:approval-chain-three",
	});
}

export default Component;
