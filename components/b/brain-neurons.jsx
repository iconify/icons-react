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

.k45gn-b6d {
  d: path("M6 16.5c-3-.5-4-4-2.5-6.5c-.75-3.25 2-6 5-5.5c2-2 6-2 8 0c3 0 5.25 3 4.5 6c1 2.5-.5 5.5-3.5 5.5v3.5c0 1-1 1.5-2 1l-2-3.5c-2 1-5.5 1-7.5-.5");
}

.ma7rm8bvu {
  d: path("M5.5 12a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m5-4.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m5 4.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m-7.25-1l2.5-2.5m2.5 0l2.5 2.5");
}
</style><g class="hntgybcog"><path class="k45gn-b6d"/><path class="ma7rm8bvu"/></g>`,
		"fallback": "uix:brain-neurons",
	});
}

export default Component;
