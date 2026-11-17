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
		"content": `<style>.ggg8arb0z {
  d: path("M8 21H6a2 2 0 0 1-2-2v-8.092a2 2 0 0 1 .683-1.506l6-5.25a2 2 0 0 1 2.634 0L17.714 8");
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
</style><g class="nrj6p8qat"><path class="qb-3c8bsq"/><path class="ggg8arb0z"/></g>`,
		"fallback": "coolicons:house-solar-panel-corner-duocolor",
	});
}

export default Component;
