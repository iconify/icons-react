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

.ofmm63kii {
  d: path("M8.25 6.75Q6.75 6 7 3m8.75 3.75Q17.25 6 17 3m-6.75 8h.01m3.49 0h.01");
}

.u28nmsb_r {
  d: path("M4 2.5v19m16-19v19M7.5 7.5c0-1.5 9-1.5 9 0l-1 9c0 3.5-7 3.5-7 0Z");
}
</style><g class="hntgybcog"><path class="u28nmsb_r"/><path class="ofmm63kii"/></g>`,
		"fallback": "uix:cattle-crush",
	});
}

export default Component;
