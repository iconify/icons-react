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
		"content": `<style>.ee_cn_6-u {
  width: 7px;
  height: 7px;
  x: 14.25px;
  y: 2.75px;
  rx: 1.5px;
}

.hle17x25s {
  width: 7px;
  height: 7px;
  x: 2.75px;
  y: 2.75px;
  rx: 1.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qnhcq1boi {
  d: path("M9.75 6.25h4.5m-8 3.5l3.5 4.5m8-4.5l-3.5 4.5");
}

.t9y25jb0x {
  width: 7px;
  height: 7px;
  x: 8.5px;
  y: 14.25px;
  rx: 1.5px;
}
</style><g class="hntgybcog"><rect class="hle17x25s"/><rect class="ee_cn_6-u"/><rect class="t9y25jb0x"/><path class="qnhcq1boi"/></g>`,
		"fallback": "iconoven:blockchain",
	});
}

export default Component;
