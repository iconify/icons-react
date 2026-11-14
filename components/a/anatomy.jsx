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
		"content": `<style>.he_knpd7u {
  d: path("m12 18.5l-3.25-3.25A2 2 0 0 1 12 12.5a2 2 0 0 1 3.25 2.75Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z28a-lbzn {
  d: path("M10 4.25a2 2 0 1 0 4 0a2 2 0 1 0-4 0M5.25 21.5V12a3 3 0 0 1 3-3h7.5a3 3 0 0 1 3 3v9.5");
}
</style><g class="hntgybcog"><path class="z28a-lbzn"/><path class="he_knpd7u"/></g>`,
		"fallback": "uix:anatomy",
	});
}

export default Component;
