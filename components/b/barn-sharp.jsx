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
		"content": `<style>.emnzcbbdl {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 22L2 10L6 5L12 2L18 5L22 10L22 22ZM8 22L8 16L16 16L16 22M16 22L8 16M10 8L14 8L14 12L10 12Z");
}
</style><path class="emnzcbbdl"/>`,
		"fallback": "keyline-icons:barn-sharp",
	});
}

export default Component;
