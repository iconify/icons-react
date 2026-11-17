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

.l9n-51log {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M19 12v4a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-4Z");
}

.zweypmtyq {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 12h18M5 12v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M8 18v2m8-2v2M5 12V6a2 2 0 1 1 4 0");
}
</style><g class="ft5dv1b6b"><path class="l9n-51log"/><path class="zweypmtyq"/></g>`,
		"fallback": "coolicons:bath-duotone",
	});
}

export default Component;
