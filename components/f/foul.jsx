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
		"content": `<style>.kvc8acc4f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 8.5h11.5v3.75h-6.25A5.5 5.5 0 1 1 9 8.5ZM9 14h.01M12 2.5v2.75M6.25 3.5L7.5 5.75M17.75 3.5L16.5 5.75");
}
</style><path class="kvc8acc4f"/>`,
		"fallback": "uix-sharp:foul",
	});
}

export default Component;
