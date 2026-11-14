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
		"content": `<style>.dikiu0sii {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 3h17m-10 0v3m3-3v3M8 6h8q.25 2.5 1.25 4q-1.5 1.5-1 3.5Q15 15.5 14 16h-4q-1-.5-2.25-2.5q.5-2-1-3.5q1-1.5 1.25-4Zm2 10l-.5 4.5l1.5-1.25h2l1.5 1.25L14 16");
}
</style><path class="dikiu0sii"/>`,
		"fallback": "uix-sharp:bat-hanging",
	});
}

export default Component;
