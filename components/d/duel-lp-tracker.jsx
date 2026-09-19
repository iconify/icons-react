import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.c7l9ndbli {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 7a6 6 0 0 0-6 6a6 6 0 0 0 .547 2.5H5.5L24 41l18.5-25.5H29.453A6 6 0 0 0 30 13a6 6 0 0 0-6-6m0 3.25a3 3 0 0 1 3 3a3 3 0 0 1-1.037 2.25h-3.926A3 3 0 0 1 21 13.25a3 3 0 0 1 3-3");
}
</style><path class="c7l9ndbli"/>`,
		"fallback": "arcticons:duel-lp-tracker",
	});
}

export default Component;
