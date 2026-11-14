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
		"content": `<style>.atkrhg6ql {
  d: path("m5 9.5l2.5-1.75L10 9.5m-4 0V12m3-2.5V12m-4 0h5m5.25-4.25h2a1.5 1.5 0 0 1 1.5 1.5v.25a1.5 1.5 0 0 1-1.5 1.5h-2a1.5 1.5 0 0 1-1.5-1.5v-.25a1.5 1.5 0 0 1 1.5-1.5M5.5 15.5h4m3 0h6.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mtuecs9vi {
  d: path("M6 5h12a3.5 3.5 0 0 1 3.5 3.5v7A3.5 3.5 0 0 1 18 19H6a3.5 3.5 0 0 1-3.5-3.5v-7A3.5 3.5 0 0 1 6 5");
}
</style><g class="hntgybcog"><path class="mtuecs9vi"/><path class="atkrhg6ql"/></g>`,
		"fallback": "uix:cheque-draft",
	});
}

export default Component;
