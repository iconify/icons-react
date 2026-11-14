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

.n4_dx8isk {
  d: path("M18.5 13.75L21 16l.75-3.25M6 19.5h.01m5.99 0h.01m5.99 0h.01");
}

.rq88v3bnp {
  d: path("M3 16C4.5 5.5 19.5 5.5 21 16");
}
</style><g class="hntgybcog"><path class="rq88v3bnp"/><path class="n4_dx8isk"/></g>`,
		"fallback": "uix:bank-queue-skip",
	});
}

export default Component;
