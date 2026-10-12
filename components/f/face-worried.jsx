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
		"content": `<style>.c6vt1lbds {
  cx: 12px;
  cy: 12px;
  r: 9.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hoa32h6yf {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.25 8.5L9.75 7m7 1.5L14.25 7");
}

.y_nyug28n {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 10.75h.01m5.99 0h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.ynvbd_bqe {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.75 17c.8-1 1.9-1.5 3.25-1.5s2.45.5 3.25 1.5");
}
</style><g class="y9tr6bcfx"><circle class="c6vt1lbds"/><path class="hoa32h6yf"/><path class="y_nyug28n"/><path class="ynvbd_bqe"/></g>`,
		"fallback": "iconoven:face-worried",
	});
}

export default Component;
