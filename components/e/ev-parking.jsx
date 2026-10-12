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

.pg1bq3n8f {
  d: path("M6.75 17.5v-11h3.5a3 3 0 0 1 0 6h-3.5M17 8l-1.75 3.5h2.5L16 15");
}
</style><g class="hntgybcog"><rect class="a_-q_pb0z"/><path class="pg1bq3n8f"/></g>`,
		"fallback": "iconoven:ev-parking",
	});
}

export default Component;
