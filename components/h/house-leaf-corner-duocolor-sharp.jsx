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

.tff42_boj {
  stroke-opacity: 0.4;
  d: path("M14 20c3.5 2 6.5-.5 6-6m0 0c-5.5-.5-8 2.5-6 6m-1 1l3-3");
}
</style><g class="nrj6p8qat"><path class="tff42_boj"/><path class="g5s6ahb7t"/></g>`,
		"fallback": "coolicons:house-leaf-corner-duocolor-sharp",
	});
}

export default Component;
