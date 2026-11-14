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
		"content": `<style>.gif1hdbdk {
  d: path("M13 12a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m2.5 0h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pkag1cbnc {
  d: path("M2.5 9.5h4l3-3h10a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-10l-3-3h-4Z");
}
</style><g class="hntgybcog"><path class="pkag1cbnc"/><path class="gif1hdbdk"/></g>`,
		"fallback": "uix:golf-rangefinder",
	});
}

export default Component;
