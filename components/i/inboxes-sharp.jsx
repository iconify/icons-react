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
		"content": `<style>.a_5-6lbcf {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8.5475 8L19.4525 8L22 12.155L22 20L6 20L6 12.155ZM6 13H10L12 16H16L18 13H22M2 14L2 8.155L4.5475 4L14.7729 4");
}
</style><path class="a_5-6lbcf"/>`,
		"fallback": "keyline-icons:inboxes-sharp",
	});
}

export default Component;
