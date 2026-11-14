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

.urucreb-h {
  fill: currentColor;
  d: path("M5.5 10h7a1.5 1.5 0 0 1 1.5 1.5v7a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 4 18.5v-7A1.5 1.5 0 0 1 5.5 10");
}

.v_xzsccbw {
  d: path("M4 20V10h10v10Zm0-10l6-6h10v10l-6 6m0-10l6-6");
}
</style><g class="hntgybcog"><path class="v_xzsccbw"/><path class="urucreb-h"/></g>`,
		"fallback": "uix:face-select",
	});
}

export default Component;
