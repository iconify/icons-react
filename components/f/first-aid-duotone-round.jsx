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
		"content": `<style>.fon8sfb8p {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M18 9a3 3 0 1 1 0 6h-3v3a3 3 0 1 1-6 0v-3H6a3 3 0 1 1 0-6h3V6a3 3 0 1 1 6 0v3Z");
}

.ft5dv1b6b {
  fill: none;
}

.p0de8r73t {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M15 9h3a3 3 0 0 1 0 6h-3v3a3 3 0 0 1-6 0v-3H6a3 3 0 0 1 0-6h3V6a3 3 0 0 1 6 0z");
}
</style><g class="ft5dv1b6b"><path class="fon8sfb8p"/><path class="p0de8r73t"/></g>`,
		"fallback": "coolicons:first-aid-duotone-round",
	});
}

export default Component;
