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
		"content": `<style>.y_41rj6hz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 18a2 2 0 1 0 4 0a2 2 0 0 0-4 0m10 0a2 2 0 1 0 4 0a2 2 0 0 0-4 0m-4-8l-2 2h4l-2 2m-6 4a2 2 0 0 1-2-2v-4l4-4c.64-.64 1.36-1 2-1h3c.64 0 1.36.36 2 1l4 4h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2M9 18h6");
}
</style><path class="y_41rj6hz"/>`,
		"fallback": "coolicons:car-electric-side",
	});
}

export default Component;
