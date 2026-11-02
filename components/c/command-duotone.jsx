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
		"content": `<style>.b570g5hkt {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M9 10H6a4 4 0 1 1 4-4v3a1 1 0 0 1-1 1m5-4a4 4 0 1 1 4 4h-3a1 1 0 0 1-1-1Zm-4 12a4 4 0 1 1-4-4h3a1 1 0 0 1 1 1Zm5-4h3a4 4 0 1 1-4 4v-3a1 1 0 0 1 1-1");
}

.ft5dv1b6b {
  fill: none;
}

.oh5ohjntf {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 9V6a3 3 0 1 0-3 3zm6 0V6a3 3 0 1 1 3 3zm0 6v3a3 3 0 1 0 3-3zm-6 0v3a3 3 0 1 1-3-3zm0-6h6v6H9Z");
}
</style><g class="ft5dv1b6b"><path class="b570g5hkt"/><path class="oh5ohjntf"/></g>`,
		"fallback": "coolicons:command-duotone",
	});
}

export default Component;
