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
		"content": `<style>.vkx4u2t6n {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 9L3 9L3 21L16 21L16 19M8 3L12 3L14 5L21 5L21 16L8 16L8 3Z");
}
</style><path class="vkx4u2t6n"/>`,
		"fallback": "keyline-icons:folders-sharp",
	});
}

export default Component;
