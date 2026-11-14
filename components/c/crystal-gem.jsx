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
		"content": `<style>.h9_vbjn0l {
  d: path("m7 7l5 2l5-2m-5 2v12.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z0q_8brbq {
  d: path("m13.171 3.554l3.25 2.925a1.75 1.75 0 0 1 .579 1.3v8.442a1.75 1.75 0 0 1-.579 1.3l-3.25 2.925a1.75 1.75 0 0 1-2.342 0l-3.25-2.925a1.75 1.75 0 0 1-.579-1.3V7.779a1.75 1.75 0 0 1 .579-1.3l3.25-2.925a1.75 1.75 0 0 1 2.342 0");
}
</style><g class="hntgybcog"><path class="z0q_8brbq"/><path class="h9_vbjn0l"/></g>`,
		"fallback": "uix:crystal-gem",
	});
}

export default Component;
