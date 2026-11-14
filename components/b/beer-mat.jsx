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
		"content": `<style>.bk9_7iect {
  d: path("M9 14.75a9 3.5 0 1 0 6 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rznh07bjb {
  d: path("M9 18v-8l1.5-2.5v-5h3v5L15 10v8Z");
}
</style><g class="hntgybcog"><path class="bk9_7iect"/><path class="rznh07bjb"/></g>`,
		"fallback": "uix:beer-mat",
	});
}

export default Component;
