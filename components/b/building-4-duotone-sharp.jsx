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

.ni3qzbr4i {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 20h18M5 20V4h10v16m0-11h4v11M9 8h2m-2 4h2");
}

.vyymr_rlq {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M5 4h10v16H5Zm4 3a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2Zm0 4a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2Z");
}
</style><g class="ft5dv1b6b"><path class="vyymr_rlq"/><path class="ni3qzbr4i"/></g>`,
		"fallback": "coolicons:building-4-duotone-sharp",
	});
}

export default Component;
