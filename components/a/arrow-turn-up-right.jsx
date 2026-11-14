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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mgm6lvbwx {
  d: path("m12.5 9l4-4l4 4");
}

.n7w0nj00v {
  d: path("M3.5 19h8a5 5 0 0 0 5-5V5");
}
</style><g class="hntgybcog"><path class="n7w0nj00v"/><path class="mgm6lvbwx"/></g>`,
		"fallback": "uix:arrow-turn-up-right",
	});
}

export default Component;
