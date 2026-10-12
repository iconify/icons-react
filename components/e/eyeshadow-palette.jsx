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
		"content": `<style>.clb5eab5l {
  d: path("M2.75 7.75h18.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lx-87bbdr {
  width: 4.75px;
  height: 6px;
  x: 5.75px;
  y: 10.75px;
  rx: 1.25px;
}

.q4x9zidoh {
  width: 4.75px;
  height: 6px;
  x: 13.5px;
  y: 10.75px;
  rx: 1.25px;
}

.vhm2msbhv {
  width: 18.5px;
  height: 15.5px;
  x: 2.75px;
  y: 4.25px;
  rx: 2.5px;
}
</style><g class="hntgybcog"><rect class="vhm2msbhv"/><path class="clb5eab5l"/><rect class="lx-87bbdr"/><rect class="q4x9zidoh"/></g>`,
		"fallback": "iconoven:eyeshadow-palette",
	});
}

export default Component;
