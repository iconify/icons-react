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
		"content": `<style>.a_-q_pb0z {
  width: 18.5px;
  height: 18.5px;
  x: 2.75px;
  y: 2.75px;
  rx: 3px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.r2lz8qbcp {
  d: path("m7 7.5l8.5 2.75l-1 3L6 10.5Zm8.5 3.25l2 .75M10 12.75L9 16.5H6.25");
}
</style><g class="hntgybcog"><rect class="a_-q_pb0z"/><path class="r2lz8qbcp"/></g>`,
		"fallback": "iconoven:camera-surveillance",
	});
}

export default Component;
