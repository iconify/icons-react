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

.kotve_3_b {
  stroke-opacity: 0.4;
  d: path("M21 19a4.472 4.472 0 0 1-8 0m3 0h-3v3m0-7a4.472 4.472 0 0 1 8 0m-3 0h3v-3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="kotve_3_b"/><path class="g5s6ahb7t"/></g>`,
		"fallback": "coolicons:house-sync-corner-duocolor-sharp",
	});
}

export default Component;
