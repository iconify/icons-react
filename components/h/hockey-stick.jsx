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

.pxyd8_r1u {
  d: path("m18.75 3l-9 13.5a2 2 0 0 1-1.66.9H3.75m5.5 2.45a2.75 1.35 0 1 0 5.5 0a2.75 1.35 0 1 0-5.5 0");
}

.q0ybizbex {
  d: path("m5.25 3l9 13.5a2 2 0 0 0 1.66.9h4.34");
}
</style><g class="hntgybcog"><path class="q0ybizbex"/><path class="pxyd8_r1u"/></g>`,
		"fallback": "iconoven:hockey-stick",
	});
}

export default Component;
