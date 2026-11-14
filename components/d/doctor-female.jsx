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
		"content": `<style>.ai0y0gi-o {
  d: path("M10.75 6.75a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m1.25 0h.01M7.5 9.5c-.75 1.5-.75 3-.25 4.5m9.25-4.5c.75 1.5.75 3 .25 4.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zd75p_bqw {
  d: path("M4 20c0-3.25 3.5-5.5 8-5.5s8 2.25 8 5.5c0 .6-.4 1-1 1H5c-.6 0-1-.4-1-1M7.5 8a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0m.25-1.25h2.75m3 0h2.75");
}
</style><g class="hntgybcog"><path class="zd75p_bqw"/><path class="ai0y0gi-o"/></g>`,
		"fallback": "uix:doctor-female",
	});
}

export default Component;
