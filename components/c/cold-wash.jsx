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

.q45tak3zi {
  d: path("M7.875 2.5h8.25A4.375 4.375 0 0 1 20.5 6.875v10.25a4.375 4.375 0 0 1-4.375 4.375h-8.25A4.375 4.375 0 0 1 3.5 17.125V6.875A4.375 4.375 0 0 1 7.875 2.5");
}

.ugdxt2b_g {
  d: path("M8.75 15.75a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0M12 5v4.5m-2-3.25l4 2m-4 0l4-2");
}
</style><g class="hntgybcog"><path class="q45tak3zi"/><path class="ugdxt2b_g"/></g>`,
		"fallback": "uix:cold-wash",
	});
}

export default Component;
