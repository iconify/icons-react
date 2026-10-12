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

.o8b1au7pd {
  width: 3.5px;
  height: 3.5px;
  x: 10.25px;
  y: 10.25px;
  rx: 0.75px;
}

.s4imi_etw {
  d: path("M8.5 7h7A1.5 1.5 0 0 1 17 8.5v7a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 7 15.5v-7A1.5 1.5 0 0 1 8.5 7M3.6 3.6l3.8 3.8m13-3.8l-3.8 3.8m3.8 13l-3.8-3.8m-13 3.8l3.8-3.8");
}
</style><g class="hntgybcog"><rect class="a_-q_pb0z"/><path class="s4imi_etw"/><rect class="o8b1au7pd"/></g>`,
		"fallback": "iconoven:depth-map",
	});
}

export default Component;
