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
		"content": `<style>.b_3m1qbvo {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M7 8.5v9");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hwmj2eixw {
  d: path("M7 8.5v9");
}

.m0wo8tb6s {
  d: path("M4.5 9 7 6.5 9.5 9");
}

.oifr9zbpt {
  d: path("M4 20h16");
}

.pwougkblb {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M17 6.5v9");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ts7kflb8f {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m14.5 13 2.5 2.5 2.5 -2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.u7sb4-hdn {
  d: path("m14.5 13 2.5 2.5 2.5 -2.5");
}

.ulyohmb5e {
  d: path("M17 6.5v9");
}

.vktdccc-m {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4.5 9 7 6.5 9.5 9");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.yu-j7jb_g {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 20h16");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="b_3m1qbvo"/><path class="vktdccc-m"/><path class="pwougkblb"/><path class="ts7kflb8f"/><path class="yu-j7jb_g"/><path class="hwmj2eixw"/><path class="m0wo8tb6s"/><path class="ulyohmb5e"/><path class="u7sb4-hdn"/><path class="oifr9zbpt"/></g>`,
		"fallback": "iconmind:counter-metric-duotone-thin",
	});
}

export default Component;
