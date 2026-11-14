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

.qbuvjeboz {
  d: path("m8.939 13.061l2-2a1.5 1.5 0 0 1 2.122 0l2 2a1.5 1.5 0 0 1 .439 1.06V16.5A1.5 1.5 0 0 1 14 18h-4a1.5 1.5 0 0 1-1.5-1.5v-2.379a1.5 1.5 0 0 1 .439-1.06");
}

.wnyuox05d {
  d: path("M9.875 2.5h4.25A4.375 4.375 0 0 1 18.5 6.875v10.25a4.375 4.375 0 0 1-4.375 4.375h-4.25A4.375 4.375 0 0 1 5.5 17.125V6.875A4.375 4.375 0 0 1 9.875 2.5m.625 3h3");
}
</style><g class="hntgybcog"><path class="wnyuox05d"/><path class="qbuvjeboz"/></g>`,
		"fallback": "uix:guest-app",
	});
}

export default Component;
