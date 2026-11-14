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
		"content": `<style>.c5nup6bhu {
  fill: currentColor;
  d: path("M10.75 14a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wemj4d2-s {
  d: path("m12 14l-5.25-3M18 14.5v7m-3-3l3 3l3-3");
}

.wwozeg7ww {
  d: path("M3 14a9 9 0 0 1 18 0");
}
</style><g class="hntgybcog"><path class="wwozeg7ww"/><path class="c5nup6bhu"/><path class="wemj4d2-s"/></g>`,
		"fallback": "uix:gauge-low",
	});
}

export default Component;
