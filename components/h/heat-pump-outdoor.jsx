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

.kwlze-6-m {
  d: path("M5 12a3.75 3.75 0 1 0 7.5 0A3.75 3.75 0 1 0 5 12m3.75 0h.01m8.74-3.5h4m-1.75-1.75L21.5 8.5l-1.75 1.75M17.5 15.5h4m-1.75-1.75l1.75 1.75l-1.75 1.75");
}

.qoe2v6bsj {
  d: path("M6 4.5h5.5A3.5 3.5 0 0 1 15 8v8a3.5 3.5 0 0 1-3.5 3.5H6A3.5 3.5 0 0 1 2.5 16V8A3.5 3.5 0 0 1 6 4.5");
}
</style><g class="hntgybcog"><path class="qoe2v6bsj"/><path class="kwlze-6-m"/></g>`,
		"fallback": "uix:heat-pump-outdoor",
	});
}

export default Component;
