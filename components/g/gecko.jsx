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
		"content": `<style>.dqml-mwkc {
  d: path("m10.5 9.5l-4-1l-1-3m8 4l4-1l1-3m-8 8.5l-4 .5l-1 2.5m8-3l4 .5l1 2.5");
}

.el4fo0y2b {
  d: path("m12 3l2.25 3.5L13.5 8v6.5c0 3 2 5.5 5.5 5c-4 1.5-8.5-1-8.5-5V8l-.75-1.5Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="el4fo0y2b"/><path class="dqml-mwkc"/></g>`,
		"fallback": "uix:gecko",
	});
}

export default Component;
