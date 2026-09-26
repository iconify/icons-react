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
		"content": `<style>.fd99nnc8y {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 3L2 21M2 10L22 10L22 16L2 16ZM6 10L6 5L12 5L12 10M22 16L22 21");
}
</style><path class="fd99nnc8y"/>`,
		"fallback": "keyline-icons:bed-sharp",
	});
}

export default Component;
