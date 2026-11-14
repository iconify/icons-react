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
		"content": `<style>.oe7fsp-9f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.125 8h.75A2.625 2.625 0 0 1 8.5 10.625v2.75A2.625 2.625 0 0 1 5.875 16h-.75A2.625 2.625 0 0 1 2.5 13.375v-2.75A2.625 2.625 0 0 1 5.125 8m13 0h.75a2.625 2.625 0 0 1 2.625 2.625v2.75A2.625 2.625 0 0 1 18.875 16h-.75a2.625 2.625 0 0 1-2.625-2.625v-2.75A2.625 2.625 0 0 1 18.125 8M8.5 12H10m4 0h1.5");
}
</style><path class="oe7fsp-9f"/>`,
		"fallback": "uix:air-gap",
	});
}

export default Component;
