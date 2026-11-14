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
		"content": `<style>.gt6wnucll {
  d: path("M14.25 6.25A4.5 4.5 0 1 1 13.5 13m3.5 1.5v7m-14.5-1C2.5 18 4 16.75 6 16.75C6 19 4.5 20.5 2.5 20.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w8t2i3e3w {
  d: path("M3 9a6 6 0 1 0 12 0A6 6 0 1 0 3 9m6 6v6.5");
}
</style><g class="hntgybcog"><path class="w8t2i3e3w"/><path class="gt6wnucll"/></g>`,
		"fallback": "uix:autumn-forest",
	});
}

export default Component;
