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

.hybyfpxry {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M21 9V6H3v3a3 3 0 0 1 0 6v3h18v-3a3 3 0 0 1 0-6m-7 1l-4 4M9 9h.01M15 15h.01");
}

.ms_3c9dqa {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M21 6v3a3 3 0 1 0 0 6v3H3v-3a3 3 0 1 0 0-6V6Z");
}
</style><g class="ft5dv1b6b"><path class="ms_3c9dqa"/><path class="hybyfpxry"/></g>`,
		"fallback": "coolicons:coupon-duotone-sharp",
	});
}

export default Component;
