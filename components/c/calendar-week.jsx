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
		"content": `<style>.mryojfbxx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.375 3.5h9.25A4.375 4.375 0 0 1 21 7.875v9.25a4.375 4.375 0 0 1-4.375 4.375h-9.25A4.375 4.375 0 0 1 3 17.125v-9.25A4.375 4.375 0 0 1 7.375 3.5M8 2v3.5M16 2v3.5m-13 2h18M7 11h10M7 14.25h10M7 17.5h10");
}
</style><path class="mryojfbxx"/>`,
		"fallback": "uix:calendar-week",
	});
}

export default Component;
