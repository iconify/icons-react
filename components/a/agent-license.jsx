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
		"content": `<style>.h-4oh-crx {
  d: path("M8.75 14v7L12 18.75L15.25 21v-7M9.5 9l1.75 1.75L14.5 7.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yoftwf7ei {
  d: path("M6 9a6 6 0 1 0 12 0A6 6 0 1 0 6 9");
}
</style><g class="hntgybcog"><path class="yoftwf7ei"/><path class="h-4oh-crx"/></g>`,
		"fallback": "uix:agent-license",
	});
}

export default Component;
