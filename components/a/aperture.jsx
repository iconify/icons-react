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
		"content": `<style>.feu6ydgps {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0m0 0l10-5M9 4l8 6m0-5v9m4-2l-10 5m4 3l-8-6m0 5v-9");
}
</style><path class="feu6ydgps"/>`,
		"fallback": "coolicons:aperture",
	});
}

export default Component;
