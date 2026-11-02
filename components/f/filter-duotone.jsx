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

.l4f-upmnm {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M19 4a1 1 0 0 1 1 1v1l-6 6v6l-4 2v-8L4 6V5a1 1 0 0 1 1-1Z");
}

.vblbmab2s {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 4h7a1 1 0 0 1 1 1v1l-6 6v6l-4 2v-8L4 6V5a1 1 0 0 1 1-1z");
}
</style><g class="ft5dv1b6b"><path class="l4f-upmnm"/><path class="vblbmab2s"/></g>`,
		"fallback": "coolicons:filter-duotone",
	});
}

export default Component;
