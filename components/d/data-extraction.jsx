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

.odkkscbdo {
  d: path("M5 2.5h6.5L16 7v12a2.5 2.5 0 0 1-2.5 2.5H5A2.5 2.5 0 0 1 2.5 19V5A2.5 2.5 0 0 1 5 2.5");
}

.yisysvfza {
  d: path("M11.5 2.5V5a2 2 0 0 0 2 2H16m-8.75 4h3.5a1.75 1.75 0 0 1 1.75 1.75v1a1.75 1.75 0 0 1-1.75 1.75h-3.5a1.75 1.75 0 0 1-1.75-1.75v-1A1.75 1.75 0 0 1 7.25 11m5.25 2.25h9m-2.75-2.75l2.75 2.75L18.75 16");
}
</style><g class="hntgybcog"><path class="odkkscbdo"/><path class="yisysvfza"/></g>`,
		"fallback": "uix:data-extraction",
	});
}

export default Component;
