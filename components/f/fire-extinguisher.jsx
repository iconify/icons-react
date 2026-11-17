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
		"content": `<style>.jn7klhbig {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 12a4 4 0 1 1 8 0v7a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2zm4-4V5l6-2M9 15h8M13 5H9a4 4 0 0 0-4 4v7");
}
</style><path class="jn7klhbig"/>`,
		"fallback": "coolicons:fire-extinguisher",
	});
}

export default Component;
