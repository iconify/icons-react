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

.inqcpvbnv {
  width: 11.5px;
  height: 18.5px;
  x: 2.75px;
  y: 2.75px;
  rx: 1px;
}

.qtwfskbfl {
  d: path("M17.25 11.75h4m-4 4.5h4");
}

.rmoxs_v6b {
  d: path("M5.75 7h5.5m-5.5 4h5.5m-5.5 4h5.5M7 21.25v-2.5h3v2.5");
}

.u1s8enbet {
  width: 4px;
  height: 14px;
  x: 17.25px;
  y: 7.25px;
  rx: 0.75px;
}
</style><g class="hntgybcog"><rect class="inqcpvbnv"/><path class="rmoxs_v6b"/><rect class="u1s8enbet"/><path class="qtwfskbfl"/></g>`,
		"fallback": "iconoven:condo-building",
	});
}

export default Component;
