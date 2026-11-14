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

.ktzk7nbkm {
  d: path("M6.25 11V8.25h3m8.5 4.75v2.75h-3");
}

.onw8lwggl {
  d: path("M6.5 5.25h11a3.5 3.5 0 0 1 3.5 3.5v6.5a3.5 3.5 0 0 1-3.5 3.5h-11a3.5 3.5 0 0 1-3.5-3.5v-6.5a3.5 3.5 0 0 1 3.5-3.5");
}
</style><g class="hntgybcog"><path class="onw8lwggl"/><path class="ktzk7nbkm"/></g>`,
		"fallback": "uix:aspect-ratio-4-3",
	});
}

export default Component;
