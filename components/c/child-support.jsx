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

.nr2kwkbiv {
  d: path("M17 15h2a3 3 0 0 1 0 6h-2");
}

.q66rbx1lo {
  d: path("M6.25 7.5a4.25 4.25 0 1 0 8.5 0a4.25 4.25 0 1 0-8.5 0M3.5 21c0-3.5 3-6 7-6q.73 0 1.41.108M14 18a3 3 0 1 0 6 0a3 3 0 1 0-6 0");
}
</style><g class="hntgybcog"><path class="q66rbx1lo"/><path class="nr2kwkbiv"/></g>`,
		"fallback": "uix:child-support",
	});
}

export default Component;
