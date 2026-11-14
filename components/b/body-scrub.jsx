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

.ibzv54bni {
  d: path("M3 12h18l-1.5 6.75a2.25 2.25 0 0 1-2.25 1.75H6.75a2.25 2.25 0 0 1-2.25-1.75Z");
}

.qp90c6bzh {
  d: path("M7 7a5 5 0 1 0 10 0A5 5 0 1 0 7 7m5-1.5h.01M10.5 8.25h.01m2.99 0h.01");
}
</style><g class="hntgybcog"><path class="ibzv54bni"/><path class="qp90c6bzh"/></g>`,
		"fallback": "uix:body-scrub",
	});
}

export default Component;
