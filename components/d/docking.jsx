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

.ip433c35j {
  d: path("M10.25 16a5.75 5.75 0 1 0 11.5 0a5.75 5.75 0 1 0-11.5 0M5.5 8a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0");
}

.sppcq7_is {
  d: path("M2.25 8a5.75 5.75 0 1 0 11.5 0a5.75 5.75 0 1 0-11.5 0");
}

.vs7anegma {
  d: path("M13.5 16a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0");
}
</style><g class="hntgybcog"><path class="sppcq7_is"/><path class="ip433c35j"/><path class="vs7anegma"/></g>`,
		"fallback": "uix:docking",
	});
}

export default Component;
