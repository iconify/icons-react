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

.puma85-xq {
  d: path("M4.5 2.5h15V21L17 19.5L14.5 21L12 19.5L9.5 21L7 19.5L4.5 21Zm11 4.5l-7 8.5");
}

.z-o_d-h1h {
  d: path("M7.5 8a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m6 6.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}
</style><g class="hntgybcog"><path class="puma85-xq"/><path class="z-o_d-h1h"/></g>`,
		"fallback": "uix:effective-tax-rate",
	});
}

export default Component;
