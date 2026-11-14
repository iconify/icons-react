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
		"content": `<style>.ef5sxmznh {
  d: path("M3 8V5a2 2 0 0 1 2-2h3m8 0h3a2 2 0 0 1 2 2v3m0 8v3a2 2 0 0 1-2 2h-3m-8 0H5a2 2 0 0 1-2-2v-3m3.5-4a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0m3.5-1.25h.01m3.99 0h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jmx1jlbqb {
  d: path("M9.75 14q2.25 2 4.5 0");
}
</style><g class="hntgybcog"><path class="ef5sxmznh"/><path class="jmx1jlbqb"/></g>`,
		"fallback": "uix:face-scan-frame",
	});
}

export default Component;
