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
		"content": `<style>.hey4kh-pk {
  d: path("m6.5 18l4-5l3 3.5l1.75-1.75l2.25 2.5m-1.5-6h.01M7.5 7.5L12 3l4.5 4.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wk7ae48se {
  d: path("M5.625 7.5h12.75A2.625 2.625 0 0 1 21 10.125v8.25A2.625 2.625 0 0 1 18.375 21H5.625A2.625 2.625 0 0 1 3 18.375v-8.25A2.625 2.625 0 0 1 5.625 7.5");
}
</style><g class="hntgybcog"><path class="wk7ae48se"/><path class="hey4kh-pk"/></g>`,
		"fallback": "uix:frame-shop",
	});
}

export default Component;
