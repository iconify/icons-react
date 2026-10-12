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

.vxr1dvrts {
  d: path("M5.25 9.25v-3h1.5v-2a1.5 1.5 0 0 1 3 0v2h1.5v3Z");
}

.w0yr8ruyi {
  width: 11px;
  height: 9px;
  x: 2.75px;
  y: 12.25px;
  rx: 3px;
}

.yl255ybye {
  d: path("M19 11.5c1.5 1.85 2.25 3.15 2.25 4.25a2.25 2.25 0 0 1-4.5 0c0-1.1.75-2.4 2.25-4.25");
}
</style><g class="hntgybcog"><path class="vxr1dvrts"/><rect class="w0yr8ruyi"/><path class="yl255ybye"/></g>`,
		"fallback": "iconoven:essential-oil",
	});
}

export default Component;
