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
		"content": `<style>.hl0ktuiwc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 9C3 6.333 7 3.333 9 6q3-1.5 6 0c2-2.667 6 .333 4 3c2 3 2 6 1 8c-1 3-4 4-8 4s-7-1-8-4c-1-2-1-5 1-8m4 3h.01M15 12h.01M11 16h2l-1 1Z");
}
</style><path class="hl0ktuiwc"/>`,
		"fallback": "coolicons:bear-sharp",
	});
}

export default Component;
