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
		"content": `<style>.g6ctus9qt {
  width: 16.5px;
  height: 18.5px;
  x: 3.75px;
  y: 2.75px;
  rx: 2.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m0jhs-f7c {
  d: path("M7.5 7h9m-9 3.5H13m-5 5l2.25 2.25l5-5");
}
</style><g class="hntgybcog"><rect class="g6ctus9qt"/><path class="m0jhs-f7c"/></g>`,
		"fallback": "iconoven:eval-check",
	});
}

export default Component;
