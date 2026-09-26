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
		"content": `<style>.w9kc2tb6n {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8.25 6.5L8.25 3L15.75 3L15.75 6.5M2 10.5C6 12.75 18 12.75 22 10.5M9.5 12.1132L9.5 15.5L14.5 15.5L14.5 12.1132M2 6.5L22 6.5L22 21L2 21L2 6.5Z");
}
</style><path class="w9kc2tb6n"/>`,
		"fallback": "keyline-icons:briefcase-sharp",
	});
}

export default Component;
