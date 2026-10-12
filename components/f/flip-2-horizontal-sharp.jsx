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
		"content": `<style>.mfiap0cip {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 3L3 3L3 21L9 21M12 2L12 22M15 3L21 3L21 7M21 9.5L21 14.5M21 17L21 21L15 21");
}
</style><path class="mfiap0cip"/>`,
		"fallback": "keyline-icons:flip-2-horizontal-sharp",
	});
}

export default Component;
