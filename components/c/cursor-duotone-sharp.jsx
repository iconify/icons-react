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

.pon8akhvy {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M21.316 8.051a1 1 0 0 1 .131 1.843l-4.759 2.38l4.019 4.019a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414 0l-4.019-4.019l-2.38 4.759a1 1 0 0 1-1.843-.131l-6-18a1.001 1.001 0 0 1 1.265-1.265Z");
}

.uu96rwblr {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m3 3l18 6l-6 3l5 5l-3 3l-5-5l-3 6z");
}
</style><g class="ft5dv1b6b"><path class="pon8akhvy"/><path class="uu96rwblr"/></g>`,
		"fallback": "coolicons:cursor-duotone-sharp",
	});
}

export default Component;
