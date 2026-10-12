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
		"content": `<style>.x_d2f6bko {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 7C2 5.3431 3.3431 4 5 4L19 4C20.6569 4 22 5.3431 22 7L22 17C22 18.6569 20.6569 20 19 20L5 20C3.3431 20 2 18.6569 2 17L2 7ZM14 8L17 8C17.5523 8 18 8.4477 18 9L18 12M6 12L6 15C6 15.5523 6.4477 16 7 16L10 16");
}
</style><path class="x_d2f6bko"/>`,
		"fallback": "keyline-icons:aspect-ratio",
	});
}

export default Component;
