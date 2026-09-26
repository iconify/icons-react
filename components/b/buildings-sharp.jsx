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
		"content": `<style>.zyde15b2q {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10 2L22 2L22 22L10 22L10 2ZM10 22L2 22L2 6L10 6M14 5L14 9M14 11L14 15M18 5L18 9M18 11L18 15M6 9L6 13M6 15L6 19M14 22L14 18L18 18L18 22");
}
</style><path class="zyde15b2q"/>`,
		"fallback": "keyline-icons:buildings-sharp",
	});
}

export default Component;
