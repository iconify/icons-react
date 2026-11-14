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

.nj0esvbgi {
  d: path("M8 20.5a1 1 0 1 0 2 0a1 1 0 1 0-2 0m6 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0");
}

.vjve5z2qo {
  d: path("M9.5 7h5a3.5 3.5 0 0 1 3.5 3.5V16a3.5 3.5 0 0 1-3.5 3.5h-5A3.5 3.5 0 0 1 6 16v-5.5A3.5 3.5 0 0 1 9.5 7m0 0V2.5h5V7");
}
</style><g class="hntgybcog"><path class="vjve5z2qo"/><path class="nj0esvbgi"/></g>`,
		"fallback": "uix:business-trip",
	});
}

export default Component;
