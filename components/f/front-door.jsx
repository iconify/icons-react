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
		"content": `<style>.ex1whdcrj {
  d: path("M8.75 5.5h3a1.75 1.75 0 0 1 1.75 1.75v1.5a1.75 1.75 0 0 1-1.75 1.75h-3A1.75 1.75 0 0 1 7 8.75v-1.5A1.75 1.75 0 0 1 8.75 5.5m0 8h3a1.75 1.75 0 0 1 1.75 1.75v1.5a1.75 1.75 0 0 1-1.75 1.75h-3A1.75 1.75 0 0 1 7 16.75v-1.5a1.75 1.75 0 0 1 1.75-1.75m8-1.5h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.sb7ngsb2s {
  d: path("M4 21.5v-19h16v19");
}
</style><g class="hntgybcog"><path class="sb7ngsb2s"/><path class="ex1whdcrj"/></g>`,
		"fallback": "uix:front-door",
	});
}

export default Component;
