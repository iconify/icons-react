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
		"content": `<style>.t4zkhxbic {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 6L18 6L18 18L2 18L2 6ZM22 8.5L22 15.5M6 9L6 15M10 9L10 15M14 9L14 15");
}
</style><path class="t4zkhxbic"/>`,
		"fallback": "keyline-icons:battery-full-sharp",
	});
}

export default Component;
