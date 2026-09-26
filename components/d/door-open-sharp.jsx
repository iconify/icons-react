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
		"content": `<style>.i026q6bbu {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 4L14 2L14 22L6 19.68L6 4ZM18 21L18 3L14 3M1 21L10.5517 21M14 21L23 21M11 10L11 14");
}
</style><path class="i026q6bbu"/>`,
		"fallback": "keyline-icons:door-open-sharp",
	});
}

export default Component;
