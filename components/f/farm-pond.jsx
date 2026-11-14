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
		"content": `<style>.edm7iq6px {
  d: path("M6 13.25q1.5-.75 3 0t3 0M9.5 16.5q1.5-.75 3 0t3 0m5.25-6.75V3.5m0 6.25L18 5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lh5302bdo {
  d: path("M2.5 14.5a8.5 5.5 0 1 0 17 0a8.5 5.5 0 1 0-17 0");
}
</style><g class="hntgybcog"><path class="lh5302bdo"/><path class="edm7iq6px"/></g>`,
		"fallback": "uix:farm-pond",
	});
}

export default Component;
