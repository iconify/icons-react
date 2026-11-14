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

.i7k2yo4-x {
  d: path("M12 2.5V16m0-9l-5 7.5M12 7l5 7.5M10.25 9h3.5m-10 7.75a1.75 2.75 0 1 0 3.5 0a1.75 2.75 0 1 0-3.5 0m6.5 2a1.75 2.75 0 1 0 3.5 0a1.75 2.75 0 1 0-3.5 0m6.5-2a1.75 2.75 0 1 0 3.5 0a1.75 2.75 0 1 0-3.5 0");
}

.r5au-nb0p {
  fill: currentColor;
  d: path("M12 2.5h.01");
}
</style><g class="hntgybcog"><path class="r5au-nb0p"/><path class="i7k2yo4-x"/></g>`,
		"fallback": "uix:dried-flowers",
	});
}

export default Component;
