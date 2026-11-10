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
		"content": `<style>.h2vejrbrt {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M1 12H4M10 12H14M20 12H23M4 8H10V16H4V8ZM14 4H20V20H14V4Z");
}
</style><path class="h2vejrbrt"/>`,
		"fallback": "keyline-icons:align-center-horizontal-sharp",
	});
}

export default Component;
