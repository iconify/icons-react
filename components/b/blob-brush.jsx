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

.lvcifx1xm {
  d: path("M10.5 10.25c-3 1.5-5.5 5.25-7 10.25c5-1.5 8.75-4 10.25-7ZM16 17c0-2 2.5-2.5 4-1.5c2 1 2 3.75.5 5.25c-1.5 1.25-4 1-4.5-1c-.25-1 0-2 0-2.75");
}

.u5emgbclb {
  d: path("M20.5 3.5L15 9m-.616-.445l1.061 1.061a1.5 1.5 0 0 1 0 2.121l-.708.708a1.5 1.5 0 0 1-2.121 0l-1.061-1.061a1.5 1.5 0 0 1 0-2.121l.708-.708a1.5 1.5 0 0 1 2.121 0");
}
</style><g class="hntgybcog"><path class="u5emgbclb"/><path class="lvcifx1xm"/></g>`,
		"fallback": "uix:blob-brush",
	});
}

export default Component;
