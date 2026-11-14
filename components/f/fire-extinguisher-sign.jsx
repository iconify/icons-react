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
		"content": `<style>.b1giyo3pl {
  d: path("M6.875 2.5h10.25A4.375 4.375 0 0 1 21.5 6.875v10.25a4.375 4.375 0 0 1-4.375 4.375H6.875A4.375 4.375 0 0 1 2.5 17.125V6.875A4.375 4.375 0 0 1 6.875 2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m41ph0ygo {
  d: path("M9.75 9.5V6h4.75a2 2 0 0 1 2 2v7M7 6h2.75");
}

.t_0exqbgj {
  d: path("M9.75 9.5za2.75 2.75 0 0 1 2.75 2.75v3.5a2.75 2.75 0 0 1-2.75 2.75A2.75 2.75 0 0 1 7 15.75v-3.5A2.75 2.75 0 0 1 9.75 9.5");
}
</style><g class="hntgybcog"><path class="b1giyo3pl"/><path class="t_0exqbgj"/><path class="m41ph0ygo"/></g>`,
		"fallback": "uix:fire-extinguisher-sign",
	});
}

export default Component;
