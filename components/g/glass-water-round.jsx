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
		"content": `<style>.oq4822b8l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m18 12l-.605 5.442A4 4 0 0 1 13.42 21h-2.84a4 4 0 0 1-3.975-3.558L5.442 6.976A3.58 3.58 0 0 1 9 3h6a3.58 3.58 0 0 1 3.558 3.976zM6 12h12");
}
</style><path class="oq4822b8l"/>`,
		"fallback": "coolicons:glass-water-round",
	});
}

export default Component;
