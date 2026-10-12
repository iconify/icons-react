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
		"content": `<style>.hb_5m5frh {
  d: path("M9.5 14.25h5v2.25a1.25 1.25 0 0 1-1.25 1.25h-2.5A1.25 1.25 0 0 1 9.5 16.5Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hp_ff5bfp {
  d: path("M9 7.75V6a3 3 0 0 1 6 0v1.75m-7.75 0h9.5v1.5l1.5 2v8a2 2 0 0 1-2 2h-8.5a2 2 0 0 1-2-2v-8l1.5-2Zm-1.5 3.5L3 12.75m15.25-1.5l2.75 1.5");
}
</style><g class="hntgybcog"><path class="hp_ff5bfp"/><path class="hb_5m5frh"/></g>`,
		"fallback": "iconoven:apron",
	});
}

export default Component;
