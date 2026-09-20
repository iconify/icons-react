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
		"content": `<style>.bo51iypxr {
  d: path("M10 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.btk8fr6ye {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M15 19h7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.dktry7bqc {
  fill: currentColor;
  d: path("M10 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.e771rwjjh {
  d: path("M9 17A5 5 0 0 1 9 7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hqk3lubqo {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M9 17A5 5 0 0 1 9 7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.j-jfbgssc {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M2 5h7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.km3h1bbzc {
  d: path("M15 19h7");
}

.se-pwqb_b {
  d: path("M2 5h7");
}

.xysie__pz {
  d: path("M15 7a5 5 0 0 1 0 10");
}

.ytbwp-h_h {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M15 7a5 5 0 0 1 0 10");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="dktry7bqc"/><path class="hqk3lubqo"/><path class="ytbwp-h_h"/><path class="j-jfbgssc"/><path class="btk8fr6ye"/><path class="bo51iypxr"/><path class="e771rwjjh"/><path class="xysie__pz"/><path class="se-pwqb_b"/><path class="km3h1bbzc"/></g>`,
		"fallback": "iconmind:cyclone-duotone-thin",
	});
}

export default Component;
