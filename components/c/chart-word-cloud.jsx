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

.n7rawkbfd {
  fill: currentColor;
  d: path("M13.5 16h3a.75.75 0 0 1 .75.75a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75a.75.75 0 0 1 .75-.75");
}

.q2qqlp0ba {
  fill: currentColor;
  d: path("M8.75 11.75h6A1.25 1.25 0 0 1 16 13a1.25 1.25 0 0 1-1.25 1.25h-6A1.25 1.25 0 0 1 7.5 13a1.25 1.25 0 0 1 1.25-1.25");
}

.rd4bgob0m {
  d: path("M6.75 16.75h4");
}

.xu9-eh2oj {
  d: path("M6.5 20a4.5 4.5 0 0 1-1.25-8.75a6.75 6.75 0 0 1 13.25-.5a4.75 4.75 0 0 1-1 9.25Z");
}
</style><g class="hntgybcog"><path class="xu9-eh2oj"/><path class="q2qqlp0ba"/><path class="rd4bgob0m"/><path class="n7rawkbfd"/></g>`,
		"fallback": "uix:chart-word-cloud",
	});
}

export default Component;
