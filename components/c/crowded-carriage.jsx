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
		"content": `<style>.a9fjfdixt {
  d: path("M4.5 9A1.75 1.75 0 1 0 8 9a1.75 1.75 0 1 0-3.5 0m5.75 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0M16 9a1.75 1.75 0 1 0 3.5 0A1.75 1.75 0 1 0 16 9M2.5 16.5a3.375 3.375 0 0 1 6.75 0a2.75 2.75 0 0 1 5.5 0a3.375 3.375 0 0 1 6.75 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k3z58xf1b {
  d: path("M6.875 4h10.25A4.375 4.375 0 0 1 21.5 8.375v5.75a4.375 4.375 0 0 1-4.375 4.375H6.875A4.375 4.375 0 0 1 2.5 14.125v-5.75A4.375 4.375 0 0 1 6.875 4");
}
</style><g class="hntgybcog"><path class="k3z58xf1b"/><path class="a9fjfdixt"/></g>`,
		"fallback": "uix:crowded-carriage",
	});
}

export default Component;
