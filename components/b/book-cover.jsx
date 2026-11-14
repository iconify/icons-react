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
		"content": `<style>.a7iawqn5j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 2.5h7A3.5 3.5 0 0 1 19 6v12a3.5 3.5 0 0 1-3.5 3.5h-7A3.5 3.5 0 0 1 5 18V6a3.5 3.5 0 0 1 3.5-3.5m-.5 0v19M11.5 7H16m-4.5 4h3");
}
</style><path class="a7iawqn5j"/>`,
		"fallback": "uix:book-cover",
	});
}

export default Component;
