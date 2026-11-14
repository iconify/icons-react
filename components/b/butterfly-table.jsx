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
		"content": `<style>.j52lgvbov {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.75 5h8.5a1.25 1.25 0 0 1 1.25 1.25a1.25 1.25 0 0 1-1.25 1.25h-8.5A1.25 1.25 0 0 1 6.5 6.25A1.25 1.25 0 0 1 7.75 5M6.5 6.25L4 12.5m13.5-6.25L20 12.5m-8-5v9M7.5 19l4.5-2.5l4.5 2.5");
}
</style><path class="j52lgvbov"/>`,
		"fallback": "uix:butterfly-table",
	});
}

export default Component;
