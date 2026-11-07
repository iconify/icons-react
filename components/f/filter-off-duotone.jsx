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

.h5vfypbsv {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m14 18l-4 2v-8L4 6V5a1 1 0 0 1 1-1h1l8 8ZM12 4h7a1 1 0 0 1 1 1v1l-3 3Z");
}

.q7fev6otb {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 4h7a1 1 0 0 1 1 1v1l-3 3m-3 3v6l-4 2v-8L4 6V5a1 1 0 0 1 1-1h1M4 2l14 14");
}
</style><g class="ft5dv1b6b"><path class="h5vfypbsv"/><path class="q7fev6otb"/></g>`,
		"fallback": "coolicons:filter-off-duotone",
	});
}

export default Component;
