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
		"content": `<style>.d0swrqbuj {
  d: path("M6.125 8h11.75a2.625 2.625 0 0 1 2.625 2.625v8.25a2.625 2.625 0 0 1-2.625 2.625H6.125A2.625 2.625 0 0 1 3.5 18.875v-8.25A2.625 2.625 0 0 1 6.125 8");
}

.hilmfd88m {
  d: path("M8 11h8a1.5 1.5 0 0 1 1.5 1.5V20a1.5 1.5 0 0 1-1.5 1.5H8A1.5 1.5 0 0 1 6.5 20v-7.5A1.5 1.5 0 0 1 8 11m4 0v10.5M8.5 6V2.5M6.75 4.25L8.5 2.5l1.75 1.75M15.5 2.5V6m-1.75-1.75L15.5 6l1.75-1.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="d0swrqbuj"/><path class="hilmfd88m"/></g>`,
		"fallback": "uix:elevator-building",
	});
}

export default Component;
