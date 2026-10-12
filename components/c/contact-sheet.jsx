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
		"content": `<style>.boiqtuypj {
  cx: 15.75px;
  cy: 15.75px;
  r: 3.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kq_pxil3p {
  d: path("M2.75 9.25h13m-6.5-6.5v13");
}

.lzd_5ob1p {
  width: 13px;
  height: 13px;
  x: 2.75px;
  y: 2.75px;
  rx: 2px;
}

.stlv7x7mf {
  d: path("M18.25 18.25L21 21");
}
</style><g class="hntgybcog"><rect class="lzd_5ob1p"/><path class="kq_pxil3p"/><circle class="boiqtuypj"/><path class="stlv7x7mf"/></g>`,
		"fallback": "iconoven:contact-sheet",
	});
}

export default Component;
