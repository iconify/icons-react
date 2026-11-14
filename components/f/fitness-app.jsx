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
		"content": `<style>.baa2mgbzu {
  d: path("M6 12h3l1.5-3l2.5 6.5l1.5-3.5H18");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hwzp73xdl {
  d: path("M10.375 2.5h3.25A4.375 4.375 0 0 1 18 6.875v10.25a4.375 4.375 0 0 1-4.375 4.375h-3.25A4.375 4.375 0 0 1 6 17.125V6.875A4.375 4.375 0 0 1 10.375 2.5");
}
</style><g class="hntgybcog"><path class="hwzp73xdl"/><path class="baa2mgbzu"/></g>`,
		"fallback": "uix:fitness-app",
	});
}

export default Component;
