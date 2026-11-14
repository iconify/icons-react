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

.n3opjgvay {
  d: path("M4.5 12a7.6 7.6 0 0 1 13.25-5m1.75 5a7.6 7.6 0 0 1-13.25 5");
}

.qbgp8rbjl {
  d: path("M17.75 4v3h-3m-8.5 13v-3h3");
}
</style><g class="hntgybcog"><path class="n3opjgvay"/><path class="qbgp8rbjl"/></g>`,
		"fallback": "uix:api-sync",
	});
}

export default Component;
