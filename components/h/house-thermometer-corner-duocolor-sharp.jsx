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
		"content": `<style>.g5s6ahb7t {
  d: path("M8 21H4V10l8-7l5.714 5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.nvyn6ibbt {
  stroke-opacity: 0.4;
  d: path("M17 12a1.5 1.5 0 0 1 1.5 1.5v3.373A2.25 2.25 0 0 1 17 20.8m0-8.8a1.5 1.5 0 0 0-1.5 1.5v3.373A2.25 2.25 0 0 0 17 20.8");
}
</style><g class="nrj6p8qat"><path class="nvyn6ibbt"/><path class="g5s6ahb7t"/></g>`,
		"fallback": "coolicons:house-thermometer-corner-duocolor-sharp",
	});
}

export default Component;
