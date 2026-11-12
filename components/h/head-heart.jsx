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
		"content": `<style>.l4j6mybmz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 21v-3c-3-2-4-5-4-8c0-4 3-7 7-7s7 3 7 7l3 4h-3v4h-4v3Zm3-11c0-2-4-3-4 0c0 2 4 5 4 5s4-3 4-5c0-3-4-2-4 0");
}
</style><path class="l4j6mybmz"/>`,
		"fallback": "coolicons:head-heart",
	});
}

export default Component;
