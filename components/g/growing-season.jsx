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
		"content": `<style>.wm3ba96my {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 10.5h18m-13.5 0a4.5 4.5 0 0 1 9 0M7 5.5L5.25 3.75M17 5.5l1.75-1.75M12 14v7m0-2c0-2-1.25-3.5-4-3.5c0 2.25 1.5 3.5 4 3.5Zm0-1.5c0-2 1.25-3.5 4-3.5c0 2.25-1.5 3.5-4 3.5Z");
}
</style><path class="wm3ba96my"/>`,
		"fallback": "uix-sharp:growing-season",
	});
}

export default Component;
