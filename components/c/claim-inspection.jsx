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
		"content": `<style>.rklnld8_h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.013 9.987l3.25-3.25a1.75 1.75 0 0 1 2.474 0l3.25 3.25a1.75 1.75 0 0 1 .513 1.238v5.025A1.75 1.75 0 0 1 10.75 18h-6.5a1.75 1.75 0 0 1-1.75-1.75v-5.025a1.75 1.75 0 0 1 .513-1.238M13 14.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0m6 2.5l2 2");
}
</style><path class="rklnld8_h"/>`,
		"fallback": "uix:claim-inspection",
	});
}

export default Component;
