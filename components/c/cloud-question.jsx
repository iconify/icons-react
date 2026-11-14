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

.ruuep8bff {
  d: path("M10.5 12c0-.9.7-1.5 1.5-1.5s1.5.6 1.5 1.5c0 1-1.5 1.1-1.5 2m0 2.25h.01");
}

.yuq-jrx4t {
  d: path("M7 18.5a4 4 0 0 1 0-8a5.5 5.5 0 0 1 11 1a3.5 3.5 0 0 1-1 7Z");
}
</style><g class="hntgybcog"><path class="yuq-jrx4t"/><path class="ruuep8bff"/></g>`,
		"fallback": "uix:cloud-question",
	});
}

export default Component;
