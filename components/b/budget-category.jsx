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

.llnszjbav {
  fill: currentColor;
  d: path("M12.5 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}

.r5ows415v {
  d: path("M9.905 4.5h6.97A2.625 2.625 0 0 1 19.5 7.125v9.75a2.625 2.625 0 0 1-2.625 2.625h-6.97a2.63 2.63 0 0 1-2.184-1.169l-3.25-4.875a2.625 2.625 0 0 1 0-2.912l3.25-4.875A2.63 2.63 0 0 1 9.905 4.5M8.25 12h.01");
}
</style><g class="hntgybcog"><path class="r5ows415v"/><path class="llnszjbav"/></g>`,
		"fallback": "uix:budget-category",
	});
}

export default Component;
