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
		"content": `<style>.dwslwmv8a {
  d: path("M10 18.25v3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.noluclb_o {
  width: 18px;
  height: 3px;
  x: 3px;
  y: 18.25px;
  rx: 0.75px;
}

.qqoj-eb3h {
  d: path("M4.25 12L13 10.5l7.25 1.75a1 1 0 0 1 0 2L13 15.75L4.25 14.5a1.25 1.25 0 0 1 0-2.5m10.25-1.15l.75-4.1");
}

.waf0bvs2p {
  width: 9.25px;
  height: 3px;
  x: 7px;
  y: 3.75px;
  rx: 1.5px;
}
</style><g class="hntgybcog"><path class="qqoj-eb3h"/><rect class="waf0bvs2p"/><rect class="noluclb_o"/><path class="dwslwmv8a"/></g>`,
		"fallback": "iconoven:bricklaying-trowel",
	});
}

export default Component;
