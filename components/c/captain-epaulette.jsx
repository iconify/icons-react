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
		"content": `<style>.e7bd4yp3s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 21.5v-15l5-4l5 4v15Zm0-12h10m-10 3h10m-10 3h10m-10 3h10");
}
</style><path class="e7bd4yp3s"/>`,
		"fallback": "uix:captain-epaulette",
	});
}

export default Component;
