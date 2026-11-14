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
		"content": `<style>.dknz0ej_k {
  d: path("M5.5 21.5V9a6.5 6.5 0 0 1 13 0v12.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.unn-zh7kf {
  d: path("M8.5 9.5a3.5 3.5 0 0 1 7 0V15q-3.5 2.5-7 0Zm0 8.5q3.5 3.5 7 0");
}
</style><g class="hntgybcog"><path class="dknz0ej_k"/><path class="unn-zh7kf"/></g>`,
		"fallback": "uix:cuticle",
	});
}

export default Component;
