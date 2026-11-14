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

.rw-5gkbxh {
  d: path("M14.75 10.25c-3.25 0-5.5.75-5 3m0 0V18m4.5 0a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0M18 16v2m0 2h.01");
}

.y2j66nb6l {
  d: path("M7 18v-3.25c-2.25-1.5-3-3.5-3-5.75c0-3.5 2.75-6.25 6.25-6.25C13.5 2.75 16 5 16 8.25l1.25 3a.6.6 0 0 1 .064.208");
}
</style><g class="hntgybcog"><path class="y2j66nb6l"/><path class="rw-5gkbxh"/></g>`,
		"fallback": "uix:anaphylaxis",
	});
}

export default Component;
