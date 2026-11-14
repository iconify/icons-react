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
		"content": `<style>.goxjtemri {
  d: path("M6.75 19H14a3.5 3.5 0 0 0 0-7h-4a3.5 3.5 0 0 1 0-7h10");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uczszbcec {
  d: path("M17.5 2.5L20 5l-2.5 2.5M2.75 19a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}
</style><g class="hntgybcog"><path class="goxjtemri"/><path class="uczszbcec"/></g>`,
		"fallback": "uix:automation",
	});
}

export default Component;
