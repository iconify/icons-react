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
		"content": `<style>.g60i7rw-c {
  d: path("M7 15V6.25a1.75 1.75 0 0 1 3.5 0V11V4.25a1.75 1.75 0 0 1 3.5 0V11V6.25a1.75 1.75 0 0 1 3.5 0V15c0 4-2.25 6.5-5.5 6.5S7 19 7 15");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xmyir0cuh {
  d: path("M7 14c3-.25 5.75.5 6.75 2.5");
}
</style><g class="hntgybcog"><path class="g60i7rw-c"/><path class="xmyir0cuh"/></g>`,
		"fallback": "uix:counting-fingers",
	});
}

export default Component;
