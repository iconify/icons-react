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
		"content": `<style>.bymg9zg0o {
  d: path("M7.375 4h9.25A4.375 4.375 0 0 1 21 8.375v8.75a4.375 4.375 0 0 1-4.375 4.375h-9.25A4.375 4.375 0 0 1 3 17.125v-8.75A4.375 4.375 0 0 1 7.375 4M8 2.5v3m8-3v3m-13 3h18");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.u4c1nbb_i {
  d: path("M10 18.5v-7h6l-1.5 2.25L16 16h-6");
}
</style><g class="hntgybcog"><path class="bymg9zg0o"/><path class="u4c1nbb_i"/></g>`,
		"fallback": "uix:calendar-deadline",
	});
}

export default Component;
