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
		"content": `<style>.nd8w5db4f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 7a2 2 0 1 1 4 0v10a2 2 0 1 1-4 0Zm10 0a2 2 0 1 1 4 0v10a2 2 0 1 1-4 0ZM5 8a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2m14-8a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2M9 12h6");
}
</style><path class="nd8w5db4f"/>`,
		"fallback": "coolicons:dumbbell-round",
	});
}

export default Component;
