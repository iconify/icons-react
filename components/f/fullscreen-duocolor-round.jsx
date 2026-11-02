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
		"content": `<style>.fl-g2gbwr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 8V7a4 4 0 0 1 4-4h1m8 0h1a4 4 0 0 1 4 4v1m0 8v1a4 4 0 0 1-4 4h-1m-8 0H7a4 4 0 0 1-4-4v-1");
}
</style><path class="fl-g2gbwr"/>`,
		"fallback": "coolicons:fullscreen-duocolor-round",
	});
}

export default Component;
