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

.r0kksx0xa {
  d: path("M9.5 17v-3a2.5 2.5 0 0 1 5 0v3");
}

.tg8ry4zls {
  d: path("M3.5 17a8.5 9 0 0 1 17 0m-18 0h19");
}
</style><g class="hntgybcog"><path class="tg8ry4zls"/><path class="r0kksx0xa"/></g>`,
		"fallback": "uix:bunker",
	});
}

export default Component;
