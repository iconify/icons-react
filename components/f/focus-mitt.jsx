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

.mpfujxbox {
  d: path("M9.5 9.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0");
}

.uzrvqebag {
  d: path("M7.5 17C4 15 4.5 2.5 12 2.5S20 15 16.5 17v4.5h-9Zm0 0h9");
}
</style><g class="hntgybcog"><path class="uzrvqebag"/><path class="mpfujxbox"/></g>`,
		"fallback": "uix:focus-mitt",
	});
}

export default Component;
