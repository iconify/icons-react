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

.qow5sdbep {
  d: path("M3.5 8a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}

.rdz6sflev {
  d: path("M16.5 16a2 2 0 1 0 4 0a2 2 0 1 0-4 0m-8-7.5l7 7");
}

.u-yzn_ozs {
  d: path("M6 5.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m8 13a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}
</style><g class="hntgybcog"><path class="qow5sdbep"/><path class="u-yzn_ozs"/><path class="rdz6sflev"/></g>`,
		"fallback": "uix:bone",
	});
}

export default Component;
