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
		"content": `<style>.dc4ggzpns {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 5L3 9l4 4M3 9h14a4 4 0 0 1 4 4v2a4 4 0 0 1-4 4h-6");
}
</style><path class="dc4ggzpns"/>`,
		"fallback": "coolicons:arrow-u-turn-up-left-duocolor-round",
	});
}

export default Component;
