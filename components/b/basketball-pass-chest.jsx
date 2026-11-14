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
		"content": `<style>.bltyvubvq {
  d: path("M8.75 5.5a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0M3 21.5v-4c0-3 1-4.5 2.5-5m15.5 9v-4c0-3-1-4.5-2.5-5m-11.25 4a4.75 4.75 0 1 0 9.5 0a4.75 4.75 0 1 0-9.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.r2tm17bxy {
  d: path("M8.75 13.25q3.25 3.25 0 6.5m6.5-6.5q-3.25 3.25 0 6.5");
}
</style><g class="hntgybcog"><path class="bltyvubvq"/><path class="r2tm17bxy"/></g>`,
		"fallback": "uix:basketball-pass-chest",
	});
}

export default Component;
