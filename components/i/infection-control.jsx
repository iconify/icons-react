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
		"content": `<style>.eqcbvrb9h {
  d: path("m13.25 9l.75-.5l-.5-.75m1.5 3l1 .25l.25-1M15 13.25l.5.75l1-.5M13.25 15v1l.75.25M10.75 15l-.75.5l.5 1M9 13.25h-.75L8 14m1-3.25L8.5 10l-.75.5m3-1.5l.25-.75L10 8M5.25 5.25l13.5 13.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.oy9aotbsd {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0");
}

.vxo3gieyf {
  d: path("M9 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0");
}
</style><g class="hntgybcog"><path class="oy9aotbsd"/><path class="vxo3gieyf"/><path class="eqcbvrb9h"/></g>`,
		"fallback": "uix:infection-control",
	});
}

export default Component;
