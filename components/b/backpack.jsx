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
		"content": `<style>.sayvfhb5d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 7h4a4 4 0 0 1 4 4v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8a4 4 0 0 1 4-4zm-4 4h8m-6-4V4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3M8 21v-4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v4");
}
</style><path class="sayvfhb5d"/>`,
		"fallback": "coolicons:backpack",
	});
}

export default Component;
