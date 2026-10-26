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
		"content": `<style>.qbtrtx6fe {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 21L2 3L7 3L7 11L12 8L12 11L17 8L17 11L22 8L22 21ZM2 7L7 7M11 5.5L11 3L23 3M10 14L10 18M14 14L14 18M18 14L18 18");
}
</style><path class="qbtrtx6fe"/>`,
		"fallback": "keyline-icons:factory-sharp",
	});
}

export default Component;
