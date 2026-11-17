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

.qb-3c8bsq {
  stroke-opacity: 0.4;
  d: path("M17 21h-4l1-8h3m0 0h3l1 8h-4m-3-4h6m-3-4v8");
}
</style><g class="nrj6p8qat"><path class="qb-3c8bsq"/><path class="g5s6ahb7t"/></g>`,
		"fallback": "coolicons:house-solar-panel-corner-duocolor-sharp",
	});
}

export default Component;
