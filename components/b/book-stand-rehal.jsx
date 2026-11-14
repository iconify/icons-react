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
		"content": `<style>.qunvazafz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 5.5C10 4 6.5 3.5 3 4v7.5c3.5-.5 7 0 9 1.5c2-1.5 5.5-2 9-1.5V4c-3.5-.5-7 0-9 1.5Zm0 0V13m-5.5-1.5l11 9.5m0-9.5L6.5 21");
}
</style><path class="qunvazafz"/>`,
		"fallback": "uix-sharp:book-stand-rehal",
	});
}

export default Component;
