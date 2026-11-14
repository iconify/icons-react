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
		"content": `<style>.bmk7qacdx {
  d: path("M13.5 2.5v4a2 2 0 0 0 2 2h4M12 12c-1.25-1-2.5-1-3.75-.5v6c1.25-.5 2.5-.5 3.75.5c1.25-1 2.5-1 3.75-.5v-6c-1.25-.5-2.5-.5-3.75.5m0 0v6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w_a5jubhp {
  d: path("M7 2.5h6.5l6 6V19a2.5 2.5 0 0 1-2.5 2.5H7A2.5 2.5 0 0 1 4.5 19V5A2.5 2.5 0 0 1 7 2.5");
}
</style><g class="hntgybcog"><path class="w_a5jubhp"/><path class="bmk7qacdx"/></g>`,
		"fallback": "uix:file-ebook",
	});
}

export default Component;
