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
		"content": `<style>.c35h1uftk {
  d: path("M5 14h14a2.5 2.5 0 0 1 2.5 2.5A2.5 2.5 0 0 1 19 19H5a2.5 2.5 0 0 1-2.5-2.5A2.5 2.5 0 0 1 5 14m-.5 0a7.5 10.5 0 0 1 15 0");
}

.d07s-te_v {
  d: path("M7.5 11.25h3.25L10 14H8.25Zm5.75 0h3.25L15.75 14H14Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="c35h1uftk"/><path class="d07s-te_v"/></g>`,
		"fallback": "uix:buffet-counter",
	});
}

export default Component;
