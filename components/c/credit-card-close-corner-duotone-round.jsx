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
		"content": `<style>.bsrvo5b0s {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M17 5a4 4 0 0 1 4 4H9v10H7a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4Z");
}

.ft5dv1b6b {
  fill: none;
}

.q3kx24bsc {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M21 9a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h2M3 9h18m-7 5l6 6m0-6l-6 6");
}
</style><g class="ft5dv1b6b"><path class="bsrvo5b0s"/><path class="q3kx24bsc"/></g>`,
		"fallback": "coolicons:credit-card-close-corner-duotone-round",
	});
}

export default Component;
