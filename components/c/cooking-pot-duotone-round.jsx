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
		"content": `<style>.eb-mwncnu {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M6 11a6.5 6.5 0 0 1 12 0h1v5a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4v-5Z");
}

.ft5dv1b6b {
  fill: none;
}

.l_upkdykg {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 11v5a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4v-5M5 11h14M3 14h2m14 0h2M6 11a6.5 6.5 0 0 1 12 0m-6-4V4m-2 0h4");
}
</style><g class="ft5dv1b6b"><path class="eb-mwncnu"/><path class="l_upkdykg"/></g>`,
		"fallback": "coolicons:cooking-pot-duotone-round",
	});
}

export default Component;
