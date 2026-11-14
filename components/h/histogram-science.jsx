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

.p8u760b4u {
  d: path("M3.5 3v17.5H21");
}

.pa2w9lbnq {
  d: path("M6.5 20.5V12h4V6h4v3.5h4v11m-8-8.5v8.5m4-11v11");
}
</style><g class="hntgybcog"><path class="p8u760b4u"/><path class="pa2w9lbnq"/></g>`,
		"fallback": "uix:histogram-science",
	});
}

export default Component;
