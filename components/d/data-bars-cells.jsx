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
		"content": `<style>.ghxdp86dc {
  fill: currentColor;
  d: path("M8.25 5h7.5a.75.75 0 0 1 .75.75a.75.75 0 0 1-.75.75h-7.5a.75.75 0 0 1-.75-.75a.75.75 0 0 1 .75-.75m0 6.25h2.5a.75.75 0 0 1 .75.75a.75.75 0 0 1-.75.75h-2.5A.75.75 0 0 1 7.5 12a.75.75 0 0 1 .75-.75m0 6.25h5a.75.75 0 0 1 .75.75a.75.75 0 0 1-.75.75h-5a.75.75 0 0 1-.75-.75a.75.75 0 0 1 .75-.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.p58esxc3f {
  d: path("M8 2.5h8A3.5 3.5 0 0 1 19.5 6v12a3.5 3.5 0 0 1-3.5 3.5H8A3.5 3.5 0 0 1 4.5 18V6A3.5 3.5 0 0 1 8 2.5M4.5 8.75h15m-15 6.5h15");
}
</style><g class="hntgybcog"><path class="p58esxc3f"/><path class="ghxdp86dc"/></g>`,
		"fallback": "uix:data-bars-cells",
	});
}

export default Component;
