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
		"content": `<style>.vfcl3xexg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M18 21V10C18 8.3431 16.657 7 15 7C13.343 7 12 8.3431 12 10V14C12 15.6569 10.657 17 9 17C7.343 17 6 15.6569 6 14V3M21 18L18 21L15 18M9 6L6 3L3 6");
}
</style><path class="vfcl3xexg"/>`,
		"fallback": "keyline-icons:arrow-swap-fill",
	});
}

export default Component;
