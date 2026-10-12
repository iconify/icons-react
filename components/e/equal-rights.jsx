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
		"content": `<style>.crap3dykr {
  cx: 5.5px;
  cy: 7.5px;
  r: 2.25px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m7ht43bwe {
  d: path("M2.75 18.5v-3a2.75 2.75 0 0 1 5.5 0v3a1 1 0 0 1-1 1h-3.5a1 1 0 0 1-1-1");
}

.tc9ytgh7v {
  cx: 18.5px;
  cy: 7.5px;
  r: 2.25px;
}

.voepop-8j {
  d: path("M15.75 18.5v-3a2.75 2.75 0 0 1 5.5 0v3a1 1 0 0 1-1 1h-3.5a1 1 0 0 1-1-1M10 11.75h4M10 15h4");
}
</style><g class="hntgybcog"><circle class="crap3dykr"/><path class="m7ht43bwe"/><circle class="tc9ytgh7v"/><path class="voepop-8j"/></g>`,
		"fallback": "iconoven:equal-rights",
	});
}

export default Component;
