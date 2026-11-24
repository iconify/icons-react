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
		"content": `<style>.bnruqdmgy {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm0 12l3-3a1.414 1.414 0 0 1 2 0l7 7m-4-9v-2l4-4l2 2l-4 4Z");
}

.ft5dv1b6b {
  fill: none;
}

.mcyf3fb0j {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z");
}
</style><g class="ft5dv1b6b"><path class="mcyf3fb0j"/><path class="bnruqdmgy"/></g>`,
		"fallback": "coolicons:image-edit-duotone",
	});
}

export default Component;
