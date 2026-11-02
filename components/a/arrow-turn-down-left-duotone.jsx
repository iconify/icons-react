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
		"content": `<style>.qrc486_fa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m12 11l-5 5l5 5m5-18v11a2 2 0 0 1-2 2H7");
}
</style><path class="qrc486_fa"/>`,
		"fallback": "coolicons:arrow-turn-down-left-duotone",
	});
}

export default Component;
