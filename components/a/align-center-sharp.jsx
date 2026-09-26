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
		"content": `<style>.l3qmjbc_h {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 3L22 3M5 9L19 9M2 15L22 15M5 21L19 21");
}
</style><path class="l3qmjbc_h"/>`,
		"fallback": "keyline-icons:align-center-sharp",
	});
}

export default Component;
