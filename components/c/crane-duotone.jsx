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
		"content": `<style>.j7g-9py6d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 3v18m-3 0h6M3 9h18M3 9l6-6l10 6m-2 0v4a2 2 0 1 1-2 2");
}
</style><path class="j7g-9py6d"/>`,
		"fallback": "coolicons:crane-duotone",
	});
}

export default Component;
