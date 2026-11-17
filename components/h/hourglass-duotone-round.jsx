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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.mqzyzub0t {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 3v2c0 1.28.36 2.36 1 3l4 4l-4 4c-.64.64-1 1.72-1 3v2M17 3v2c0 1.28-.36 2.36-1 3l-4 4l4 4c.64.64 1 1.72 1 3v2M5 3h14M5 21h14");
}

.mstaubcsv {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M7 3h10v2c0 1.041-.237 2.236-1 3l-4 4l-4-4c-.763-.764-1-1.959-1-3Zm1 13l4-4l4 4c.763.764 1 1.959 1 3v2H7v-2c0-1.041.237-2.236 1-3");
}
</style><g class="ft5dv1b6b"><path class="mstaubcsv"/><path class="mqzyzub0t"/></g>`,
		"fallback": "coolicons:hourglass-duotone-round",
	});
}

export default Component;
