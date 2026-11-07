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
		"content": `<style>.tbbwgcu3t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M19.828 19.828A4 4 0 0 1 17 21H7a4 4 0 0 1-4-4V7c0-1.105.448-2.105 1.172-2.828M9 3h8a4 4 0 0 1 4 4v8M3 17l7-7m5-2a1 1 0 1 0 2 0a1 1 0 0 0-2 0M2 2l20 20");
}
</style><path class="tbbwgcu3t"/>`,
		"fallback": "coolicons:image-off-round",
	});
}

export default Component;
