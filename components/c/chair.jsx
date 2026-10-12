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
		"content": `<style>.av82twfil {
  width: 11.5px;
  height: 6px;
  x: 6.25px;
  y: 2.75px;
  rx: 2px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m5s_8ab1i {
  d: path("M6.75 15.75v5.5m10.5-5.5v5.5");
}

.nkods97vb {
  d: path("M8 8.75v3.5m8-3.5v3.5");
}

.yrq4k8b9l {
  width: 14.5px;
  height: 3.5px;
  x: 4.75px;
  y: 12.25px;
  rx: 1.5px;
}
</style><g class="hntgybcog"><rect class="av82twfil"/><path class="nkods97vb"/><rect class="yrq4k8b9l"/><path class="m5s_8ab1i"/></g>`,
		"fallback": "iconoven:chair",
	});
}

export default Component;
