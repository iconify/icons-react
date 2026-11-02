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
		"content": `<style>.c5w31_byx {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M19 4a1 1 0 0 1 1 1c0 .763-.48 1.479-1 2l-4 4c-.52.521-1 1.237-1 2v4c-.001.85-1.349 1.674-2 2c-.919.459-2-.081-2-1v-5c0-.763-.48-1.479-1-2L5 7c-.52-.521-1-1.237-1-2a1 1 0 0 1 1-1Z");
}

.ft5dv1b6b {
  fill: none;
}

.xmytdtbkm {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 4h7a1 1 0 0 1 1 1c0 .64-.36 1.36-1 2l-4 4c-.64.64-1 1.36-1 2v4c0 .613-.774 1.387-2 2c-.919.46-2-.081-2-1v-5c0-.64-.36-1.36-1-2L5 7c-.64-.64-1-1.36-1-2a1 1 0 0 1 1-1z");
}
</style><g class="ft5dv1b6b"><path class="c5w31_byx"/><path class="xmytdtbkm"/></g>`,
		"fallback": "coolicons:filter-duotone-round",
	});
}

export default Component;
