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

.ky7-4qbsx {
  d: path("M11.873 20.431A5.6 5.6 0 0 1 11 20.5C6.5 20.5 3 15 3 10c0-4 2.5-7 8-7s8 3 8 7q0 .652-.077 1.309");
}

.qwyk_hffk {
  d: path("M5.5 9.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m7 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0m1.5 8a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0");
}
</style><g class="hntgybcog"><path class="ky7-4qbsx"/><path class="qwyk_hffk"/></g>`,
		"fallback": "uix:breathing-apparatus",
	});
}

export default Component;
