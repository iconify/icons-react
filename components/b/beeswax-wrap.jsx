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
		"content": `<style>.gehpesouz {
  d: path("M16.5 4.5V7H19");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.iml9c5bhw {
  d: path("m3.5 13l2-8.5h11L19 7l1.5 6ZM5 13c0 4 3 6.5 7 6.5s7-2.5 7-6.5");
}
</style><g class="hntgybcog"><path class="iml9c5bhw"/><path class="gehpesouz"/></g>`,
		"fallback": "uix:beeswax-wrap",
	});
}

export default Component;
