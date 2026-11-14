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

.ieoboacug {
  d: path("M7 11.5V21m0-6.5h10V21M7 18h10");
}

.q0f4le8ya {
  d: path("m4.241 8.477l6.75-4.765a1.75 1.75 0 0 1 2.018 0l6.75 4.765a1.75 1.75 0 0 1 .741 1.43v9.343A1.75 1.75 0 0 1 18.75 21H5.25a1.75 1.75 0 0 1-1.75-1.75V9.907a1.75 1.75 0 0 1 .741-1.43");
}
</style><g class="hntgybcog"><path class="q0f4le8ya"/><path class="ieoboacug"/></g>`,
		"fallback": "uix:dormitory",
	});
}

export default Component;
