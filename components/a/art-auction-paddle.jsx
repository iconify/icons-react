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

.i1pp1ckvs {
  d: path("M9.5 8a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0");
}

.jvf0w7b_f {
  d: path("M9.375 2.5h5.25A4.375 4.375 0 0 1 19 6.875v2.25a4.375 4.375 0 0 1-4.375 4.375h-5.25A4.375 4.375 0 0 1 5 9.125v-2.25A4.375 4.375 0 0 1 9.375 2.5M12 13.5za1.75 1.75 0 0 1 1.75 1.75v4.5A1.75 1.75 0 0 1 12 21.5a1.75 1.75 0 0 1-1.75-1.75v-4.5A1.75 1.75 0 0 1 12 13.5");
}
</style><g class="hntgybcog"><path class="jvf0w7b_f"/><path class="i1pp1ckvs"/></g>`,
		"fallback": "uix:art-auction-paddle",
	});
}

export default Component;
