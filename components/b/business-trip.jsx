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

.jpje4qd7e {
  d: path("M7 11V9.75a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5V11m-8.25 4.5h12.5m3-12.75v7m-3-2.75l3-1.5l3 1.5M17 9.75h2.5");
}

.w0_mt1r8h {
  width: 12.5px;
  height: 10.25px;
  x: 2.75px;
  y: 11px;
  rx: 2px;
}
</style><g class="hntgybcog"><rect class="w0_mt1r8h"/><path class="jpje4qd7e"/></g>`,
		"fallback": "iconoven:business-trip",
	});
}

export default Component;
