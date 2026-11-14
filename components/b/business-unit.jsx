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

.je520hb2t {
  d: path("M10.75 13.25v-8a8 8 0 1 0 8 8Z");
}

.kq4taj50n {
  d: path("M13.5 10.5v-8a8 8 0 0 1 8 8Z");
}
</style><g class="hntgybcog"><path class="je520hb2t"/><path class="kq4taj50n"/></g>`,
		"fallback": "uix:business-unit",
	});
}

export default Component;
