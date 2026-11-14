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

.wln_a1bla {
  d: path("M12 2.5s7 7.5 7 12a7 7 0 0 1-14 0c0-4.5 7-12 7-12");
}

.xeen6pbkr {
  fill: currentColor;
  d: path("M12 18.25L9.25 15.5A1.75 1.75 0 0 1 12 13a1.75 1.75 0 0 1 2.75 2.5Z");
}
</style><g class="hntgybcog"><path class="wln_a1bla"/><path class="xeen6pbkr"/></g>`,
		"fallback": "uix:drop-heart",
	});
}

export default Component;
