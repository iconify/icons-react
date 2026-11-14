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
		"content": `<style>.hhzugwbsl {
  d: path("M8.25 4.5q3.75 1.5 7.5 0M7.5 7.25q4.5 1.5 9 0l3-2.25m-3 2.25l3 2.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vfp46xk1w {
  d: path("M4.5 19.75c0-3.25 3.25-5.5 7.5-5.5s7.5 2.25 7.5 5.5c0 .6-.4 1-1 1h-13c-.6 0-1-.4-1-1M7.5 7a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0");
}
</style><g class="hntgybcog"><path class="vfp46xk1w"/><path class="hhzugwbsl"/></g>`,
		"fallback": "uix:bandaged-casualty",
	});
}

export default Component;
