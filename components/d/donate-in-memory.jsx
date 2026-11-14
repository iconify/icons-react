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
		"content": `<style>.wkcdjqbmz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 10h6v11H9ZM5.5 21h13M12 8.25c-1.25 0-2-.75-2-2s1-2.25 2-3.5C13 4 14 5 14 6.25s-.75 2-2 2Zm0 0V10");
}
</style><path class="wkcdjqbmz"/>`,
		"fallback": "uix-sharp:donate-in-memory",
	});
}

export default Component;
