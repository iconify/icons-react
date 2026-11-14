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
		"content": `<style>.gnikv_12o {
  d: path("M9 15.75a3 4 0 1 0 6 0a3 4 0 1 0-6 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.olsregbbv {
  d: path("M10.25 8L7.5 4.5L5 4m5 5.5l-4.5-2L3 9m7 1.5L5 12l-2 2.5m6.5-1l-3 3L6 20m7.75-12l2.75-3.5L19 4m-5 5.5l4.5-2L21 9m-7 1.5l5 1.5l2 2.5m-6.5-1l3 3L18 20");
}

.ujq6mbchl {
  d: path("M9.75 9.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0");
}
</style><g class="hntgybcog"><path class="ujq6mbchl"/><path class="gnikv_12o"/><path class="olsregbbv"/></g>`,
		"fallback": "uix:arachnid",
	});
}

export default Component;
