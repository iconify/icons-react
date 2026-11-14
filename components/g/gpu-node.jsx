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

.tp784bcvt {
  d: path("M9.5 6h5A3.5 3.5 0 0 1 18 9.5v5a3.5 3.5 0 0 1-3.5 3.5h-5A3.5 3.5 0 0 1 6 14.5v-5A3.5 3.5 0 0 1 9.5 6m0-3.5V6m5-3.5V6m-5 12v3.5m5-3.5v3.5m-12-12H6m-3.5 5H6m12-5h3.5m-3.5 5h3.5");
}

.wh4yx2daz {
  d: path("M11.25 9.5h1.5a1.75 1.75 0 0 1 1.75 1.75v1.5a1.75 1.75 0 0 1-1.75 1.75h-1.5a1.75 1.75 0 0 1-1.75-1.75v-1.5a1.75 1.75 0 0 1 1.75-1.75");
}
</style><g class="hntgybcog"><path class="tp784bcvt"/><path class="wh4yx2daz"/></g>`,
		"fallback": "uix:gpu-node",
	});
}

export default Component;
