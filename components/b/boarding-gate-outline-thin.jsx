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
		"content": `<style>.cq8r84bse {
  d: path("M20 21V4h-4v17");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l90ci7bpu {
  d: path("m12 9.5 2.5 2.5 -2.5 2.5");
}

.pnevpfb0l {
  d: path("M4 21V4h4v17");
}

.srslrxb7v {
  d: path("M10 12h4.5");
}
</style><g class="hntgybcog"><path class="pnevpfb0l"/><path class="cq8r84bse"/><path class="srslrxb7v"/><path class="l90ci7bpu"/></g>`,
		"fallback": "iconmind:boarding-gate-outline-thin",
	});
}

export default Component;
