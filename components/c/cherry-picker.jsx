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
		"content": `<style>.d4ibzc0nc {
  width: 5px;
  height: 4px;
  x: 7.5px;
  y: 2.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 1px;
}

.hha4cxblz {
  cx: 17px;
  cy: 19px;
  r: 2.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l0haxibzw {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M17 19h.01");
}

.ox2ue_b-w {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 19h.01");
}

.r_0b548wt {
  cx: 7px;
  cy: 19px;
  r: 2.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v7l2_2atj {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 13.25L15 8l-2.5-3.25");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.yk9sh642y {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 15.5v-1.75q0-1.25.67-2.3l.41-.65q.67-1.05 1.92-1.05h1.5Q8.5 9.75 8.5 11v1q0 1.25 1.25 1.25H20q1.25 0 1.25 1.25v1q0 1.25-1.25 1.25H4q-1.25 0-1.25-1.25");
}
</style><g class="y9tr6bcfx"><path class="yk9sh642y"/><path class="v7l2_2atj"/><rect class="d4ibzc0nc"/><circle class="r_0b548wt"/><path class="ox2ue_b-w"/><circle class="hha4cxblz"/><path class="l0haxibzw"/></g>`,
		"fallback": "iconoven:cherry-picker",
	});
}

export default Component;
