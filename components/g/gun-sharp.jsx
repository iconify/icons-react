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
		"content": `<style>.ez02r451m {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M19 5L19 3L19 2M16 10L14 14L9.5 14L9.2391 14M3.656 10C4.5 11 4.2373 12.6667 3.95 13.5L2.0004 21L6.9678 21L10.5161 10L18.5 10L19.5 9L22 9L22 5L19 5L3 5L2 9C2 9.5523 2.4477 10 3 10L3.656 10L10.5161 10");
}
</style><path class="ez02r451m"/>`,
		"fallback": "keyline-icons:gun-sharp",
	});
}

export default Component;
