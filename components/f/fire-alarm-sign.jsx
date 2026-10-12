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

.fguu80nff {
  d: path("M8.5 15v-3a3.5 3.5 0 0 1 7 0v3l1 1.25h-9Zm2.5 3.75h2M5.75 10a6 6 0 0 1 1.5-2.75m11 2.75a6 6 0 0 0-1.5-2.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><rect class="a_-q_pb0z"/><path class="fguu80nff"/></g>`,
		"fallback": "iconoven:fire-alarm-sign",
	});
}

export default Component;
