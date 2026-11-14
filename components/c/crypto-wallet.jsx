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
		"content": `<style>.ee89zfb4y {
  d: path("M6.875 7h10.25a4.375 4.375 0 0 1 4.375 4.375v4.75a4.375 4.375 0 0 1-4.375 4.375H6.875A4.375 4.375 0 0 1 2.5 16.125v-4.75A4.375 4.375 0 0 1 6.875 7M11 7a4 4 0 0 1 8 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.tl9ponnkw {
  d: path("M21.5 11.5h-4a2.25 2.25 0 0 0 0 4.5h4m-3.75-2.25h.01");
}
</style><g class="hntgybcog"><path class="ee89zfb4y"/><path class="tl9ponnkw"/></g>`,
		"fallback": "uix:crypto-wallet",
	});
}

export default Component;
