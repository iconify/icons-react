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

.o2a7-ybvz {
  d: path("M3 20.5h9a8 8 0 0 0 8-8V7");
}

.yx4s2syrx {
  d: path("M3 15.5h9a3 3 0 0 0 3-3V7M3 15.5v5m12.25-17h4.5a1.5 1.5 0 0 1 1.5 1.5v.5a1.5 1.5 0 0 1-1.5 1.5h-4.5a1.5 1.5 0 0 1-1.5-1.5V5a1.5 1.5 0 0 1 1.5-1.5");
}
</style><g class="hntgybcog"><path class="o2a7-ybvz"/><path class="yx4s2syrx"/></g>`,
		"fallback": "uix:conduit",
	});
}

export default Component;
