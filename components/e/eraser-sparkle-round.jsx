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
		"content": `<style>.ixugmactl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m15 16l4-4a2.83 2.83 0 0 0 0-4l-1-1a2.83 2.83 0 0 0-4 0l-4 4m0 0l-3 3a4.243 4.243 0 0 0 0 6h4l4-4m-4 4h10m-11-9l5 5M6 3c0 1 2 3 3 3c-1 0-3 2-3 3c0-1-2-3-3-3c1 0 3-2 3-3");
}
</style><path class="ixugmactl"/>`,
		"fallback": "coolicons:eraser-sparkle-round",
	});
}

export default Component;
