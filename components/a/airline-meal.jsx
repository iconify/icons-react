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

.qzkvbx_uy {
  width: 18.5px;
  height: 14.5px;
  x: 2.75px;
  y: 4.75px;
  rx: 2px;
}

.roo68046a {
  d: path("M5.5 14.5h6m-5.5 0a2.5 2.5 0 0 1 5 0M8.5 12v-1.5M13.75 8v2.25a1.25 1.25 0 0 0 2.5 0V8M15 11.5V16m3.5-8v8");
}
</style><g class="hntgybcog"><rect class="qzkvbx_uy"/><path class="roo68046a"/></g>`,
		"fallback": "iconoven:airline-meal",
	});
}

export default Component;
