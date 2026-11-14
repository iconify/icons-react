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

.k_by7bbdl {
  d: path("M16.5 11.5c-3.5 0-7-1.25-9.5-3.5m6 7c-2.5-.75-4.5-2.25-6-4");
}

.nsae3mmfm {
  d: path("M3.5 4.5c6-.5 12.5.5 17 3.75c.5 1.5 0 2.75-1.5 3.25h-2.5c.75 1.25.5 2.75-1 3.5H13c.5 1.75 0 3.5-2 4.5C6.5 18 3.5 13 3.5 4.5");
}
</style><g class="hntgybcog"><path class="nsae3mmfm"/><path class="k_by7bbdl"/></g>`,
		"fallback": "uix:bird-wing",
	});
}

export default Component;
