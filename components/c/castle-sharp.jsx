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
		"content": `<style>.v-_sdzbjd {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 7L2 21L22 21L22 7M2 10L22 10M6 10L6 2M18 10L18 2M6 5L18 5M12 5L12 2M15 21L15 16.5C15 15.3954 13.1046 14 12 14C10.8954 14 9 15.3954 9 16.5L9 21");
}
</style><path class="v-_sdzbjd"/>`,
		"fallback": "keyline-icons:castle-sharp",
	});
}

export default Component;
