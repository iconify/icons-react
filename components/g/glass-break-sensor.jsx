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
		"content": `<style>.a1to-1p4u {
  d: path("M9.5 9.5L6 5.75M9.5 9.5L15 6.25M9.5 9.5L6.25 15");
}

.bock6ybzc {
  d: path("M11.42 14.96a5 5 0 0 1 3.54-3.54");
}

.f7r42znre {
  width: 18.5px;
  height: 18.5px;
  x: 2.75px;
  y: 2.75px;
  rx: 2.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.o6w4s0bmn {
  cx: 16.25px;
  cy: 16.25px;
  r: 2px;
}
</style><g class="hntgybcog"><rect class="f7r42znre"/><path class="a1to-1p4u"/><circle class="o6w4s0bmn"/><path class="bock6ybzc"/></g>`,
		"fallback": "iconoven:glass-break-sensor",
	});
}

export default Component;
