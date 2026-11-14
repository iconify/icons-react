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
		"content": `<style>.h01r_5fde {
  d: path("m4.5 3l2 18h11l2-18");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.upjgw1qam {
  d: path("M8.5 14.5c0 4.5 7 4.5 7 0M8 6.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m4.5 3.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}
</style><g class="hntgybcog"><path class="h01r_5fde"/><path class="upjgw1qam"/></g>`,
		"fallback": "uix:denture-cleaner",
	});
}

export default Component;
