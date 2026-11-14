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
		"content": `<style>.a614robba {
  d: path("m5.5 9.25l4-5H14m-3.25 5l-1.5-6M8 3.25h2.5m3.5 1l-.5-1.5h1.75M14.75 18l2 2L21 15.75");
}

.hhio58qfr {
  d: path("M2.5 9.25a3 3 0 1 0 6 0a3 3 0 1 0-6 0m11 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xbzax3b5i {
  d: path("M5.5 9.25h5.25l3.25-5l2.5 5");
}
</style><g class="hntgybcog"><path class="hhio58qfr"/><path class="xbzax3b5i"/><path class="a614robba"/></g>`,
		"fallback": "uix:bike-check",
	});
}

export default Component;
