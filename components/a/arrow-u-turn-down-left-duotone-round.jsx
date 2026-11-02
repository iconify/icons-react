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
		"content": `<style>.ol3ka2byx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m7 11l-4 4l4 4m-4-4h14a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4h-6");
}
</style><path class="ol3ka2byx"/>`,
		"fallback": "coolicons:arrow-u-turn-down-left-duotone-round",
	});
}

export default Component;
