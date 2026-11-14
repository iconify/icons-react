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

.je8kwq2jh {
  d: path("M4 9v10.5A1.5 1.5 0 0 0 5.5 21h9a1.5 1.5 0 0 0 1.5-1.5V9m0 2h2.5a1.5 1.5 0 0 1 1.5 1.5v4a1.5 1.5 0 0 1-1.5 1.5H16");
}

.msx20xb4g {
  d: path("M3 13V7.5a3 3 0 0 1 4.5-3.25a3 3 0 0 1 5.5 0a3 3 0 0 1 4 3.25V9H5v4a1 1 0 0 1-2 0");
}
</style><g class="hntgybcog"><path class="je8kwq2jh"/><path class="msx20xb4g"/></g>`,
		"fallback": "uix:beer-overflow",
	});
}

export default Component;
