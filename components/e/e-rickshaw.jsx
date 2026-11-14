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

.m2adr0dfc {
  d: path("M6 18.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m9.25 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0M13 10.25l-2.5 2l3-.25l-2.5 1.75");
}

.soffigqyu {
  d: path("M3 7.5c0-3 2-5 5.5-5h7c3 0 5 2 5.5 5Zm1.5 0v9h16l-1.25-9");
}
</style><g class="hntgybcog"><path class="soffigqyu"/><path class="m2adr0dfc"/></g>`,
		"fallback": "uix:e-rickshaw",
	});
}

export default Component;
