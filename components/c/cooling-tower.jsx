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
		"content": `<style>.xu5pur4ma {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 21.25C7.5 18 8.75 15.5 8.75 14s-.5-2.75-1.25-4.25h9c-.75 1.5-1.25 2.75-1.25 4.25s1.25 4 3.75 7.25Zm2.5-4.5h9m-9-10.5a2.5 2.5 0 0 1 4.25-1.75a2.5 2.5 0 0 1 4.25 0a2 2 0 0 1 1.75 1.25");
}
</style><path class="xu5pur4ma"/>`,
		"fallback": "iconoven:cooling-tower",
	});
}

export default Component;
