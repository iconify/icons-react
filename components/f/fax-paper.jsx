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

.i0mkkg3-z {
  d: path("M17 6a2 3 0 1 0 4 0a2 3 0 1 0-4 0M5 9v10.5l1.75 2l1.75-2l1.75 2l1.75-2l1.75 2l1.75-2V9M8 13.5h4.5");
}

.t4_9k-bwm {
  d: path("M19 3H5a2 3 0 0 0 0 6h14");
}
</style><g class="hntgybcog"><path class="t4_9k-bwm"/><path class="i0mkkg3-z"/></g>`,
		"fallback": "uix:fax-paper",
	});
}

export default Component;
