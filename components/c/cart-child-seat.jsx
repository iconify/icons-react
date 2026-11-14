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

.xx3_1bc-k {
  d: path("M2.5 4.5h2L7 16m0 4a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m8 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m0-16.25a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}

.ykm_afsze {
  d: path("M7.424 8h10.902a1.75 1.75 0 0 1 1.709 2.124l-.984 4.5A1.75 1.75 0 0 1 17.341 16H8.409a1.75 1.75 0 0 1-1.71-1.376l-.984-4.5A1.75 1.75 0 0 1 7.424 8");
}
</style><g class="hntgybcog"><path class="ykm_afsze"/><path class="xx3_1bc-k"/></g>`,
		"fallback": "uix:cart-child-seat",
	});
}

export default Component;
