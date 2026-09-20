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

.l8dn9jbyp {
  d: path("M2 15h20");
}

.lgv7os48g {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 18h16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.o8od38cnm {
  d: path("M4 18h16");
}

.sg1q03b0n {
  d: path("M2.5 15a6.5 6.5 0 0 1 13 0");
}

.uzkjx1-8e {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M2 15h20");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.vef-h5bay {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M2.5 15a6.5 6.5 0 0 1 13 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.y_f-vqe_z {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M15.5 15V8H21v7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.zgowxqjxj {
  d: path("M15.5 15V8H21v7");
}
</style><g class="hntgybcog"><path class="uzkjx1-8e"/><path class="vef-h5bay"/><path class="y_f-vqe_z"/><path class="lgv7os48g"/><path class="l8dn9jbyp"/><path class="sg1q03b0n"/><path class="zgowxqjxj"/><path class="o8od38cnm"/></g>`,
		"fallback": "iconmind:in-flight-meal-duotone-thin",
	});
}

export default Component;
