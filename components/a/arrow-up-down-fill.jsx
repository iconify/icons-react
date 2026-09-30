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
		"content": `<style>.i14a9cb2p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M18 3L18 21M21 18L18 21L15 18M6 21L6 3M9 6L6 3L3 6");
}
</style><path class="i14a9cb2p"/>`,
		"fallback": "keyline-icons:arrow-up-down-fill",
	});
}

export default Component;
