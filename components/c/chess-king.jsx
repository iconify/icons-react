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
		"content": `<style>.ah8bt7bst {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.5v6M9.75 4.75h4.5M7.5 8.5h9l-2.25 4l1.5 6h-7.5l1.5-6Zm-.5 10h10a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5H7A1.5 1.5 0 0 1 5.5 20A1.5 1.5 0 0 1 7 18.5");
}
</style><path class="ah8bt7bst"/>`,
		"fallback": "uix:chess-king",
	});
}

export default Component;
