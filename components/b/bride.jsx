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

.x909x4b0h {
  d: path("M3 19.5c0-3.25 3.25-5.5 7.5-5.5s7.5 2.25 7.5 5.5c0 .6-.4 1-1 1H4c-.6 0-1-.4-1-1M6.5 7a4 4 0 1 0 8 0a4 4 0 1 0-8 0");
}

.z66zg0cwt {
  d: path("M8 3.75c4-2 9-.25 10.5 4.25l2.5 8l-5.25-.5");
}
</style><g class="hntgybcog"><path class="x909x4b0h"/><path class="z66zg0cwt"/></g>`,
		"fallback": "uix:bride",
	});
}

export default Component;
