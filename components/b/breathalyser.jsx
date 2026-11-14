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
		"content": `<style>.gb219piva {
  d: path("M11.375 7.5h1.75a4.375 4.375 0 0 1 4.375 4.375v5.25a4.375 4.375 0 0 1-4.375 4.375h-1.75A4.375 4.375 0 0 1 7 17.125v-5.25A4.375 4.375 0 0 1 11.375 7.5m.875-5zA1.75 1.75 0 0 1 14 4.25v1.5a1.75 1.75 0 0 1-1.75 1.75a1.75 1.75 0 0 1-1.75-1.75v-1.5a1.75 1.75 0 0 1 1.75-1.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rzx01rmkb {
  d: path("M11.5 10.25H13A1.75 1.75 0 0 1 14.75 12v.5A1.75 1.75 0 0 1 13 14.25h-1.5a1.75 1.75 0 0 1-1.75-1.75V12a1.75 1.75 0 0 1 1.75-1.75m.75 7.75h.01");
}
</style><g class="hntgybcog"><path class="gb219piva"/><path class="rzx01rmkb"/></g>`,
		"fallback": "uix:breathalyser",
	});
}

export default Component;
