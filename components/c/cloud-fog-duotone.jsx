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

.q8q-244ks {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M7 15a4 4 0 0 1 0-8c2-6 11-5 11 2a3 3 0 1 1 0 6Z");
}

.xgctsqycr {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 15a4 4 0 1 1 0-8c2-6 11-5 11 2a3 3 0 0 1 0 6Zm-2 3h14M7 21h10");
}
</style><g class="ft5dv1b6b"><path class="q8q-244ks"/><path class="xgctsqycr"/></g>`,
		"fallback": "coolicons:cloud-fog-duotone",
	});
}

export default Component;
