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

.orvh_1b-m {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 21V3h18v18M3 21h18M6 21v-4h4v4m4 0v-4h4v4M12 6c.225 1.125.9 2.025 1.8 2.7c.675.675.9 1.575.9 2.7a2.7 2.7 0 1 1-5.4 0c0-.675.225-1.125.45-1.35m0 0a.9.9 0 1 0 1.8 0c0-.675-.225-.9-.45-1.35c-.45-.9-.225-1.8.9-2.7");
}

.vvmflk4-r {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M3 3h18v18H3Z");
}
</style><g class="ft5dv1b6b"><path class="vvmflk4-r"/><path class="orvh_1b-m"/></g>`,
		"fallback": "coolicons:fire-station-duotone-sharp",
	});
}

export default Component;
