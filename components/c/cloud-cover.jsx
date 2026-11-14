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
		"content": `<style>.h7-45obyg {
  d: path("M6.5 12.25a4.5 4.5 0 1 1 6-4.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.r5cnetnbl {
  d: path("M6.5 19.5a3.5 3.5 0 0 1-.5-7a6 6 0 0 1 11.25-1a4 4 0 0 1 .25 8Z");
}
</style><g class="hntgybcog"><path class="r5cnetnbl"/><path class="h7-45obyg"/></g>`,
		"fallback": "uix:cloud-cover",
	});
}

export default Component;
