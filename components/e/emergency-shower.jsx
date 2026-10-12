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

.a0ccnsbdj {
  d: path("M7 18.25v-12h5.5v1.5m-2.5 1h5M11 11v1.5m1.5-1.5v3m1.5-3v1.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><rect class="a_-q_pb0z"/><path class="a0ccnsbdj"/></g>`,
		"fallback": "iconoven:emergency-shower",
	});
}

export default Component;
