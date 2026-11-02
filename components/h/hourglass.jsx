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
		"content": `<style>.y58uuqqeg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 3v3c0 .64.36 1.36 1 2l4 4l-4 4c-.64.64-1 1.36-1 2v3M17 3v3c0 .64-.36 1.36-1 2l-4 4l4 4c.64.64 1 1.36 1 2v3M5 3h14M5 21h14");
}
</style><path class="y58uuqqeg"/>`,
		"fallback": "coolicons:hourglass",
	});
}

export default Component;
