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
		"content": `<style>.d6qhu6bfv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10 3H6C4.34315 3 3 4.34315 3 6V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V14M18 3C19.6568 3 21 4.3432 21 6C21 7.6569 19.6568 9 18 9C16.3432 9 15 7.6569 15 6C15 4.3432 16.3432 3 18 3Z");
}
</style><path class="d6qhu6bfv"/>`,
		"fallback": "keyline-icons:app-dot",
	});
}

export default Component;
