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

.lmya8bbwl {
  d: path("M7.5 9.75h3l3-2.5h3");
}

.ot_j0v85x {
  width: 17px;
  height: 9px;
  x: 3.5px;
  y: 4px;
  rx: 2.5px;
}

.z30al_b8u {
  width: 3px;
  height: 6px;
  x: 6px;
  y: 13px;
  rx: 0.75px;
}

.zxytvhbzw {
  width: 3px;
  height: 6px;
  x: 15px;
  y: 13px;
  rx: 0.75px;
}
</style><g class="hntgybcog"><rect class="ot_j0v85x"/><path class="lmya8bbwl"/><rect class="z30al_b8u"/><rect class="zxytvhbzw"/></g>`,
		"fallback": "iconoven:car-fuse",
	});
}

export default Component;
