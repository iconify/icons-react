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
		"content": `<style>.gcvv_rb-r {
  d: path("M5.25 11.75L12 18.5l6.75-6.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xmm3srbki {
  d: path("M5.25 5.5L12 12.25l6.75-6.75");
}
</style><g class="hntgybcog"><path class="xmm3srbki"/><path class="gcvv_rb-r"/></g>`,
		"fallback": "iconoven:chevron-down-to-line",
	});
}

export default Component;
