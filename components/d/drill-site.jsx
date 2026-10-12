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

.i0sjwb92i {
  width: 8.25px;
  height: 6px;
  x: 7.5px;
  y: 5px;
  rx: 1.5px;
}

.p99ac6j5j {
  d: path("M18.5 8h2.75");
}

.ph7t2jcgj {
  width: 3px;
  height: 8px;
  x: 12.5px;
  y: 11px;
  rx: 1.25px;
}

.psb62i4cw {
  d: path("M15.5 13.75h5.75");
}

.q9rukgobt {
  width: 2.75px;
  height: 3.5px;
  x: 15.75px;
  y: 6.25px;
  rx: 1px;
}

.x3liq2b6d {
  d: path("M7.5 6.75H4.75a2 2 0 0 0-2 2v7.5a2 2 0 0 0 2 2h1.5a2 2 0 0 0 2-2V11");
}
</style><g class="hntgybcog"><rect class="i0sjwb92i"/><path class="x3liq2b6d"/><rect class="q9rukgobt"/><path class="p99ac6j5j"/><rect class="ph7t2jcgj"/><path class="psb62i4cw"/></g>`,
		"fallback": "iconoven:drill-site",
	});
}

export default Component;
