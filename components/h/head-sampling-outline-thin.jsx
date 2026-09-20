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
		"content": `<style>.asusuabnc {
  d: path("m6 9 3 3 3 -3");
}

.g7c6_g9qq {
  d: path("M9 12v3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lqcp5xb1v {
  d: path("M4 3h16");
}

.pzzcoqbsw {
  d: path("M13.5 12H18");
}

.t3vzob-fn {
  d: path("M2 12a6 6 0 0 1 6 -6h8a6 6 0 0 1 6 6 6 6 0 0 1 -6 6H8a6 6 0 0 1 -6 -6");
}
</style><g class="hntgybcog"><path class="lqcp5xb1v"/><path class="t3vzob-fn"/><path class="asusuabnc"/><path class="g7c6_g9qq"/><path class="pzzcoqbsw"/></g>`,
		"fallback": "iconmind:head-sampling-outline-thin",
	});
}

export default Component;
