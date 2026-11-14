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
		"content": `<style>.aozaq4bdg {
  d: path("M13.5 3v4.5H18m-8.5 8h5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i5r5rjb6d {
  d: path("M3 11v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-8M2.5 11h19M6 11V4.5A1.5 1.5 0 0 1 7.5 3h6L18 7.5V11");
}
</style><g class="hntgybcog"><path class="i5r5rjb6d"/><path class="aozaq4bdg"/></g>`,
		"fallback": "uix:document-archive",
	});
}

export default Component;
