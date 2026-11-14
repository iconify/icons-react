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
		"content": `<style>.dj4ql890g {
  d: path("M7.54 3.612A9.5 9.5 0 1 1 3.612 7.54");
}

.h9gvq5-tq {
  d: path("M17.25 5.25a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ja8_zg6om {
  d: path("M6.5 12a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0");
}

.rq_kn7bnn {
  d: path("M9.5 12a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0");
}
</style><g class="hntgybcog"><path class="rq_kn7bnn"/><path class="ja8_zg6om"/><path class="dj4ql890g"/><path class="h9gvq5-tq"/></g>`,
		"fallback": "uix:inner-planets",
	});
}

export default Component;
