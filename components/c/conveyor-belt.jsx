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
		"content": `<style>.ba2zebc0e {
  width: 6.5px;
  height: 4.25px;
  x: 13px;
  y: 7.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 1px;
}

.mjzzoicrv {
  width: 6px;
  height: 5.25px;
  x: 4.5px;
  y: 6.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 1px;
}

.q0v_7u20k {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 19v2.25m11-2.25v2.25");
}

.t1oufub1w {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5.25 16.5h.01m6.74 0h.01m6.74 0h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.yfb9__b1l {
  width: 18.5px;
  height: 5px;
  x: 2.75px;
  y: 14px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 2.5px;
}
</style><g class="y9tr6bcfx"><rect class="mjzzoicrv"/><rect class="ba2zebc0e"/><rect class="yfb9__b1l"/><path class="t1oufub1w"/><path class="q0v_7u20k"/></g>`,
		"fallback": "iconoven:conveyor-belt",
	});
}

export default Component;
