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
		"content": `<style>.x75pb3blo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 21L6 4C6 3.4477 6.4477 3 7 3L17 3C17.5523 3 18 3.4477 18 4L18 21L6 21ZM2 21L22 21M14 11L14 13");
}
</style><path class="x75pb3blo"/>`,
		"fallback": "keyline-icons:door",
	});
}

export default Component;
