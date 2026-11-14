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

.rxz2t2zdx {
  d: path("M7 9.75a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m6-.25a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}

.uezbb-bij {
  d: path("M2.5 14a9.5 10 0 0 1 19 0Zm6.75 0v5a2 2 0 0 0 2 2h1.5a2 2 0 0 0 2-2v-5");
}
</style><g class="hntgybcog"><path class="uezbb-bij"/><path class="rxz2t2zdx"/></g>`,
		"fallback": "uix:autumn-mushroom",
	});
}

export default Component;
