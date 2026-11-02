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
		"content": `<style>.cyx0i9j4i {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M21.316 12.051a1 1 0 0 1-.073 1.919l-2.287.572l1.751 1.751a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414 0l-1.751-1.751l-.572 2.287a1 1 0 0 1-1.919.073l-4-12a1.001 1.001 0 0 1 1.265-1.265Z");
}

.ft5dv1b6b {
  fill: none;
}

.ipgerybnw {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m9 9l12 4l-4 1l3 3l-3 3l-3-3l-1 4zm0-4V3M5 9H3m10-4l1-1m-9 9l-1 1");
}
</style><g class="ft5dv1b6b"><path class="cyx0i9j4i"/><path class="ipgerybnw"/></g>`,
		"fallback": "coolicons:cursor-click-duotone-sharp",
	});
}

export default Component;
