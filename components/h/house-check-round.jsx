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
		"content": `<style>.o0qfcro3p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m16 7l3 3c.64.64 1 1.72 1 3v4a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-4c0-1.28.36-2.36 1-3l4-4a4.243 4.243 0 0 1 6 0zm-7 7l2 2l4-4");
}
</style><path class="o0qfcro3p"/>`,
		"fallback": "coolicons:house-check-round",
	});
}

export default Component;
