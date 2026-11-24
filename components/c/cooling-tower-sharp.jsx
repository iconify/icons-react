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
		"content": `<style>.mc7qvvbtf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 10h8m-8 0c.67 1 1 2.5 1 4c0 3-2 5.5-4 7m11-11c-.67 1-1 2.5-1 4c0 3 2 5.5 4 7M3 21h18M7 6a2 2 0 1 1 4 0a3 3 0 0 1 6 0");
}
</style><path class="mc7qvvbtf"/>`,
		"fallback": "coolicons:cooling-tower-sharp",
	});
}

export default Component;
