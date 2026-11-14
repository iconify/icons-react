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
		"content": `<style>.f-iib0bjn {
  d: path("M6 5.5h12A3.5 3.5 0 0 1 21.5 9v6a3.5 3.5 0 0 1-3.5 3.5H6A3.5 3.5 0 0 1 2.5 15V9A3.5 3.5 0 0 1 6 5.5m-.5 0L9 2m9.5 3.5L15 2");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w3is48jcu {
  d: path("m5.75 15l2-6.5l2 6.5M6.5 12.75H9m4.25-4.25H18L15 15");
}
</style><g class="hntgybcog"><path class="f-iib0bjn"/><path class="w3is48jcu"/></g>`,
		"fallback": "uix:bank-queue-display",
	});
}

export default Component;
