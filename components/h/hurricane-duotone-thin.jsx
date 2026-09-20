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
		"content": `<style>.b_28-wbex {
  d: path("M6 12v8h7");
}

.bo51iypxr {
  d: path("M10 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.cvdxfrhpf {
  d: path("M18 12a6 6 0 0 1 -12 0");
}

.dktry7bqc {
  fill: currentColor;
  d: path("M10 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pknz0qoby {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M6 12v8h7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.razwus2gf {
  d: path("M18 12V4h-7");
}

.tp8vjxbvr {
  d: path("M6 12a6 6 0 0 1 12 0");
}

.u6fl1s0ti {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M18 12a6 6 0 0 1 -12 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.uxwbq-n4s {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M6 12a6 6 0 0 1 12 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.vuymtl_tr {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M18 12V4h-7");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="dktry7bqc"/><path class="uxwbq-n4s"/><path class="u6fl1s0ti"/><path class="vuymtl_tr"/><path class="pknz0qoby"/><path class="bo51iypxr"/><path class="tp8vjxbvr"/><path class="cvdxfrhpf"/><path class="razwus2gf"/><path class="b_28-wbex"/></g>`,
		"fallback": "iconmind:hurricane-duotone-thin",
	});
}

export default Component;
