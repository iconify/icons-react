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
		"content": `<style>.absrzacth {
  d: path("M2.5 9H17v8m0-8l4.5-4.75M2 19.75h20");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nq9grwtwn {
  d: path("M2.5 9L7 4.25h14.5v8.25L17 17H2.5Z");
}
</style><g class="hntgybcog"><path class="nq9grwtwn"/><path class="absrzacth"/></g>`,
		"fallback": "uix:clay-block",
	});
}

export default Component;
