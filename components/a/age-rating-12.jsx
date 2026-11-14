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

.mtvi81ccy {
  d: path("M9.625 3.5h4.75A6.125 6.125 0 0 1 20.5 9.625v4.75a6.125 6.125 0 0 1-6.125 6.125h-4.75A6.125 6.125 0 0 1 3.5 14.375v-4.75A6.125 6.125 0 0 1 9.625 3.5");
}

.ua0o869ur {
  d: path("M7.5 9.75L9.5 8v8m2.75-5.75a2.25 2.25 0 0 1 4.5 0c0 2.25-4.5 3.25-4.5 5.75h4.5");
}
</style><g class="hntgybcog"><path class="mtvi81ccy"/><path class="ua0o869ur"/></g>`,
		"fallback": "uix:age-rating-12",
	});
}

export default Component;
