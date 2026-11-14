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

.m_-aexz3a {
  d: path("m9 2.5l3 3l-3 3m-.5 3l1-1v5m4.75-5zA1.75 1.75 0 0 1 16 12.25v1.5a1.75 1.75 0 0 1-1.75 1.75a1.75 1.75 0 0 1-1.75-1.75v-1.5a1.75 1.75 0 0 1 1.75-1.75");
}

.rur0mzb4g {
  d: path("M18.495 9.25A7.5 7.5 0 1 1 12 5.5");
}
</style><g class="hntgybcog"><path class="rur0mzb4g"/><path class="m_-aexz3a"/></g>`,
		"fallback": "uix:forward-10",
	});
}

export default Component;
