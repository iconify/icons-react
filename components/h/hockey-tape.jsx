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
		"content": `<style>.fvnv2zbfr {
  d: path("M4.5 10.5a7.5 7.5 0 1 0 15 0a7.5 7.5 0 1 0-15 0");
}

.g8h060bvb {
  d: path("M9 10.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0m-4.5 0V21");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="fvnv2zbfr"/><path class="g8h060bvb"/></g>`,
		"fallback": "uix:hockey-tape",
	});
}

export default Component;
