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
		"content": `<style>.ilqxmpbkc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.5v6M9.75 4.75h4.5M7.5 8.5h9l-2.25 4l1.5 6h-7.5l1.5-6Zm-2 10h13v3h-13Z");
}
</style><path class="ilqxmpbkc"/>`,
		"fallback": "uix-sharp:chess-king",
	});
}

export default Component;
