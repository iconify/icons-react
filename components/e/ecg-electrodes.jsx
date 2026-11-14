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

.m2um35nxv {
  d: path("M9.5 12c0-5.5 2.5-9 6.5-9h5.5");
}

.oa9s1ub2b {
  fill: currentColor;
  d: path("M8 13.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}

.ozsuw2pra {
  d: path("M5.5 13.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0");
}

.wid_bsb8m {
  d: path("M2.25 13.5a7.25 7.25 0 1 0 14.5 0a7.25 7.25 0 1 0-14.5 0");
}
</style><g class="hntgybcog"><path class="wid_bsb8m"/><path class="ozsuw2pra"/><path class="oa9s1ub2b"/><path class="m2um35nxv"/></g>`,
		"fallback": "uix:ecg-electrodes",
	});
}

export default Component;
