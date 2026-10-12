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

.o_wg9vwpx {
  d: path("m13.59 4.34l6.07 6.07q1.59 1.59 0 3.18l-6.07 6.07q-1.59 1.59-3.18 0l-6.07-6.07q-1.59-1.59 0-3.18l6.07-6.07q1.59-1.59 3.18 0");
}

.pv4d0uykc {
  d: path("M9.25 15.25V13a2 2 0 0 1 2-2h4.5M13.5 8.75L15.75 11l-2.25 2.25");
}
</style><g class="hntgybcog"><path class="o_wg9vwpx"/><path class="pv4d0uykc"/></g>`,
		"fallback": "iconoven:directions",
	});
}

export default Component;
