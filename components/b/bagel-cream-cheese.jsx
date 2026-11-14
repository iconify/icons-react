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
		"content": `<style>.ggtf_e9rw {
  d: path("M8.5 8a3.5 1.5 0 1 0 7 0a3.5 1.5 0 1 0-7 0m-6 6c2.5 2.5 4.5-.5 7 2s5-1.5 7.5.5c2 1.5 3.5-1 4.5-2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qn6k5-b6p {
  d: path("M2.5 8v7c0 3 4.5 5 9.5 5s9.5-2 9.5-5V8");
}

.vh0yo0b2j {
  d: path("M2.5 8a9.5 4 0 1 0 19 0a9.5 4 0 1 0-19 0");
}
</style><g class="hntgybcog"><path class="vh0yo0b2j"/><path class="qn6k5-b6p"/><path class="ggtf_e9rw"/></g>`,
		"fallback": "uix:bagel-cream-cheese",
	});
}

export default Component;
