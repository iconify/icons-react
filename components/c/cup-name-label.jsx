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
		"content": `<style>.b01zpc03g {
  d: path("M10.75 10h2.5A1.75 1.75 0 0 1 15 11.75v1.5A1.75 1.75 0 0 1 13.25 15h-2.5A1.75 1.75 0 0 1 9 13.25v-1.5A1.75 1.75 0 0 1 10.75 10");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ln0eq99ll {
  d: path("M5.75 3h12.5A1.75 1.75 0 0 1 20 4.75a1.75 1.75 0 0 1-1.75 1.75H5.75A1.75 1.75 0 0 1 4 4.75A1.75 1.75 0 0 1 5.75 3M5 6.5L7 21h10l2-14.5");
}
</style><g class="hntgybcog"><path class="ln0eq99ll"/><path class="b01zpc03g"/></g>`,
		"fallback": "uix:cup-name-label",
	});
}

export default Component;
