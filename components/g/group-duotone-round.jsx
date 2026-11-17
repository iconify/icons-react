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
		"content": `<style>.ar4isib-q {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M15 12a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-3Z");
}

.ft5dv1b6b {
  fill: none;
}

.y2cyi5bsb {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M14 12H9a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2zm-4 0h5a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2zM3 6a3 3 0 0 1 3-3m12 0a3 3 0 0 1 3 3m0 12a3 3 0 0 1-3 3M6 21a3 3 0 0 1-3-3");
}
</style><g class="ft5dv1b6b"><path class="ar4isib-q"/><path class="y2cyi5bsb"/></g>`,
		"fallback": "coolicons:group-duotone-round",
	});
}

export default Component;
