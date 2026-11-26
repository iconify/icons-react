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
		"content": `<style>.ggn6-6buc {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 9L15 9L15 15L9 15ZM2 3L22 3M2 21L22 21M2 12L6 12M18 12L22 12");
}
</style><path class="ggn6-6buc"/>`,
		"fallback": "keyline-icons:image-inline-sharp",
	});
}

export default Component;
