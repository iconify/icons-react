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
		"content": `<style>.fdtf_qa2v {
  d: path("m5.5 11.5l1 1l1.75-1.75m1.5.75h1.5M5.5 16l1 1l1.75-1.75m1.5.75h1.5m6.57-12.97a3 3 0 1 0 3.4 3.4a2.5 2.5 0 0 1-3.4-3.4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v32hg31ey {
  width: 11px;
  height: 14.25px;
  x: 2.75px;
  y: 7px;
  rx: 2.5px;
}
</style><g class="hntgybcog"><rect class="v32hg31ey"/><path class="fdtf_qa2v"/></g>`,
		"fallback": "iconoven:bedtime-routine",
	});
}

export default Component;
