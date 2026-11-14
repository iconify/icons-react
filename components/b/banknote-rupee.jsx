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
		"content": `<style>.h2l6qpb2n {
  d: path("M10.75 7.5c1.6 0 2.45 1 2.5 2.5c-.05 1.3-.9 2.3-2.5 2.25h-2l5 4.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.sx7aadcvn {
  d: path("M6 4.5h12A3.5 3.5 0 0 1 21.5 8v8a3.5 3.5 0 0 1-3.5 3.5H6A3.5 3.5 0 0 1 2.5 16V8A3.5 3.5 0 0 1 6 4.5m2.75 3h6.5M8.75 10h6.5");
}
</style><g class="hntgybcog"><path class="sx7aadcvn"/><path class="h2l6qpb2n"/></g>`,
		"fallback": "uix:banknote-rupee",
	});
}

export default Component;
