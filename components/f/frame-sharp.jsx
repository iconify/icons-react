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
		"content": `<style>.nbmzgf7qj {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M1 6L23 6M1 18L23 18M6 1L6 23M18 1L18 23");
}
</style><path class="nbmzgf7qj"/>`,
		"fallback": "keyline-icons:frame-sharp",
	});
}

export default Component;
