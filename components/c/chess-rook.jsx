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
		"content": `<style>.e-3jdcc3e {
  d: path("M7.5 3h1.25q.5 0 .5.5v1q0 .5.5.5h.65q.5 0 .5-.5v-1q0-.5.5-.5h1.2q.5 0 .5.5v1q0 .5.5.5h.65q.5 0 .5-.5v-1q0-.5.5-.5h1.25q.5 0 .5.5v4q0 .5-.35.85l-.8.8q-.35.35-.35.85v5q0 .5-.5.5H9q-.5 0-.5-.5v-5q0-.5-.35-.85l-.8-.8Q7 8 7 7.5v-4q0-.5.5-.5m1.25 6.5h6.5");
}

.e5tfnwbmk {
  width: 14px;
  height: 2.75px;
  x: 5px;
  y: 18.5px;
  rx: 1.25px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="e-3jdcc3e"/><rect class="e5tfnwbmk"/></g>`,
		"fallback": "iconoven:chess-rook",
	});
}

export default Component;
