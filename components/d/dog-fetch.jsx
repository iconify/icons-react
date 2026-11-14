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
		"content": `<style>.cb8ut1_7x {
  d: path("M2.5 6.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0m9.5 2a12.5 12.5 0 0 1 2.25 1.25m2.25 2A12.5 12.5 0 0 1 18 14m1 2.75a12.5 12.5 0 0 1 .5 3.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.q2w3p_b6o {
  d: path("M17.25 17.75L19.5 20l2.25-2.25");
}
</style><g class="hntgybcog"><path class="cb8ut1_7x"/><path class="q2w3p_b6o"/></g>`,
		"fallback": "uix:dog-fetch",
	});
}

export default Component;
