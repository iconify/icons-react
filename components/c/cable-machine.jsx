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

.hpl9opmef {
  d: path("M13 6a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0M2.5 21.5h7M18 6v9.5m-3.5 0h7");
}

.nohtw3bix {
  d: path("M5 21.5v-18h10.5");
}
</style><g class="hntgybcog"><path class="nohtw3bix"/><path class="hpl9opmef"/></g>`,
		"fallback": "uix:cable-machine",
	});
}

export default Component;
