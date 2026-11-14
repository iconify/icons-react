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
		"content": `<style>.d2b17smuf {
  d: path("M2.5 19c2.5-6 6-7.5 9.5-7.5s7 1.5 9.5 7.5Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j94qcuc9n {
  d: path("M9.75 19v-2a2.25 2.25 0 0 1 4.5 0v2M8.75 8.5a1.75 1.5 0 1 1 3.5 0a1.75 1.5 0 1 1-3.5 0m3.5-.5a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 1 1-2.5 0m0 1.25L10.5 11.5m1.75-2.25l1.5 2.25m.75-4.75L15.75 5");
}
</style><g class="hntgybcog"><path class="d2b17smuf"/><path class="j94qcuc9n"/></g>`,
		"fallback": "uix:anthill",
	});
}

export default Component;
