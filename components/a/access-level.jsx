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
		"content": `<style>.iorl3ob5l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.25 14h.5a1.75 1.75 0 0 1 1.75 1.75v3a1.75 1.75 0 0 1-1.75 1.75h-.5a1.75 1.75 0 0 1-1.75-1.75v-3A1.75 1.75 0 0 1 5.25 14m6.5-4.5h.5A1.75 1.75 0 0 1 14 11.25v7.5a1.75 1.75 0 0 1-1.75 1.75h-.5A1.75 1.75 0 0 1 10 18.75v-7.5a1.75 1.75 0 0 1 1.75-1.75m6.5-4.5h.5a1.75 1.75 0 0 1 1.75 1.75v12a1.75 1.75 0 0 1-1.75 1.75h-.5a1.75 1.75 0 0 1-1.75-1.75v-12A1.75 1.75 0 0 1 18.25 5");
}
</style><path class="iorl3ob5l"/>`,
		"fallback": "uix:access-level",
	});
}

export default Component;
