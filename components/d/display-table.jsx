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
		"content": `<style>.dt-0v0bmj {
  d: path("M3.75 12h16.5a1.25 1.25 0 0 1 1.25 1.25a1.25 1.25 0 0 1-1.25 1.25H3.75a1.25 1.25 0 0 1-1.25-1.25A1.25 1.25 0 0 1 3.75 12m.75 2.5v7m15-7v7m-12-13h9A1.5 1.5 0 0 1 18 10v.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 10.5V10a1.5 1.5 0 0 1 1.5-1.5m0-3.5h9A1.5 1.5 0 0 1 18 6.5V7a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 7v-.5A1.5 1.5 0 0 1 7.5 5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w1nv5b9vq {
  d: path("M10.25 5L12 6.75L13.75 5M8.5 5v3.5m7-3.5v3.5");
}
</style><g class="hntgybcog"><path class="dt-0v0bmj"/><path class="w1nv5b9vq"/></g>`,
		"fallback": "uix:display-table",
	});
}

export default Component;
