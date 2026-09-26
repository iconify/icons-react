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
		"content": `<style>.h7d6o3kik {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2.5 11L7.16667 16L16.5 6M21.5 11L15.5 18L13.5 16");
}
</style><path class="h7d6o3kik"/>`,
		"fallback": "keyline-icons:double-check-fill",
	});
}

export default Component;
