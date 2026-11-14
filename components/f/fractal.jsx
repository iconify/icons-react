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

.o-p0o_7ce {
  d: path("m13.3 6.008l6.905 11.994a1.5 1.5 0 0 1-1.299 2.248H5.094a1.5 1.5 0 0 1-1.299-2.248L10.7 6.008a1.5 1.5 0 0 1 2.6 0");
}

.x9pjyfcdo {
  d: path("M9.844 12h4.312a1.5 1.5 0 0 1 1.299 2.248L13.3 17.992a1.5 1.5 0 0 1-2.6 0l-2.155-3.744A1.5 1.5 0 0 1 9.844 12");
}
</style><g class="hntgybcog"><path class="o-p0o_7ce"/><path class="x9pjyfcdo"/></g>`,
		"fallback": "uix:fractal",
	});
}

export default Component;
