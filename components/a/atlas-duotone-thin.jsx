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
		"content": `<style>.apq5eeq9z {
  d: path("M9 12a5 5 0 1 0 10 0 5 5 0 1 0 -10 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hxua64xnl {
  d: path("M14 17a5 5 0 0 1 0 -10");
}

.rutulxlvn {
  d: path("M14 7v10");
}

.u7w0hbc1g {
  fill: currentColor;
  d: path("M9 12a5 5 0 1 0 10 0 5 5 0 1 0 -10 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.wuvisubmw {
  d: path("M8 3v18");
}

.y4_6s7b5v {
  d: path("M4 5a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2Z");
}

.zyr0_hpav {
  fill: currentColor;
  d: path("M4 5a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="zyr0_hpav"/><path class="u7w0hbc1g"/><path class="y4_6s7b5v"/><path class="wuvisubmw"/><path class="apq5eeq9z"/><path class="rutulxlvn"/><path class="hxua64xnl"/></g>`,
		"fallback": "iconmind:atlas-duotone-thin",
	});
}

export default Component;
