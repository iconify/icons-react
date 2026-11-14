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

.mqg7cqe5g {
  d: path("m2.5 6l5-2.5l9 3l5-2.5v14l-5 2.5l-9-3l-5 2.5Zm5-2.5v14m9-11v14");
}

.s7t5fsbgt {
  d: path("m12 15.5l-2.25-3.75a2.5 2.5 0 1 1 4.5 0Z");
}
</style><g class="hntgybcog"><path class="mqg7cqe5g"/><path class="s7t5fsbgt"/></g>`,
		"fallback": "uix:impact-map",
	});
}

export default Component;
