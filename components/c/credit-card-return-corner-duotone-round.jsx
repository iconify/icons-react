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
		"content": `<style>.eu3_vpbgt {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M21 9a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h2M3 9h18m0 4v2a2 2 0 0 1-2 2h-6m3-3l-3 3l3 3");
}

.ft5dv1b6b {
  fill: none;
}

.pk9vkxkrw {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M22 9H10v10a1 1 0 0 1-1 1H7a5 5 0 0 1-5-5V9a5 5 0 0 1 5-5h10a5 5 0 0 1 5 5");
}
</style><g class="ft5dv1b6b"><path class="pk9vkxkrw"/><path class="eu3_vpbgt"/></g>`,
		"fallback": "coolicons:credit-card-return-corner-duotone-round",
	});
}

export default Component;
