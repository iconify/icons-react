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

.ve5xrf8zt {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M4 11a2 2 0 1 1 4 0a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2a2 2 0 1 1 4 0v3a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4Z");
}

.x9kgnzbuh {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 11v3a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4v-3a2 2 0 1 0-4 0a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2a2 2 0 1 0-4 0m2 7v2m12-2v2M6 9V8a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v1");
}
</style><g class="ft5dv1b6b"><path class="ve5xrf8zt"/><path class="x9kgnzbuh"/></g>`,
		"fallback": "coolicons:armchair-duotone-round",
	});
}

export default Component;
