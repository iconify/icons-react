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
		"content": `<style>.wj1_lbm_e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5.667 21a2.667 2.667 0 0 1 0-5.333C7 11.667 13 12.333 13 17a2 2 0 1 1 0 4ZM21 9a6 6 0 0 1-3.85 5.601M9 9a6 6 0 0 1 6-6a4.269 4.269 0 1 0 6 6");
}
</style><path class="wj1_lbm_e"/>`,
		"fallback": "coolicons:cloud-moon-round",
	});
}

export default Component;
