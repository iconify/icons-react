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
		"content": `<style>.bezeu8bgf {
  d: path("M11.772 20.5H4c-.6 0-1-.4-1-1c0-3.25 3.25-5.5 7.5-5.5c.931 0 1.814.108 2.625.311M6.5 7a4 4 0 1 0 8 0a4 4 0 1 0-8 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j4_4ihbej {
  fill: currentColor;
  d: path("M18 18.25S15.75 17 15.75 15.5c0-.75.5-1.5 1.25-1.5c.5 0 .75.25 1 .5c.25-.25.5-.5 1-.5c.75 0 1.25.75 1.25 1.5c0 1.5-2.25 2.75-2.25 2.75");
}

.pv0-gyb7x {
  d: path("m14.25 19.25l2.25 2h3l2.25-2");
}
</style><g class="hntgybcog"><path class="bezeu8bgf"/><path class="j4_4ihbej"/><path class="pv0-gyb7x"/></g>`,
		"fallback": "uix:doula",
	});
}

export default Component;
