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
		"content": `<style>.tjhq3nw4d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 4.5H15v9H2.5Zm17 0v9m-1.5-9h3M18 9h3m-3 4.5h3M2.5 18q2.25-1.5 4.75 0Q9.5 19.5 12 18q2.25-1.5 4.75 0q2.25 1.5 4.75 0");
}
</style><path class="tjhq3nw4d"/>`,
		"fallback": "uix-sharp:ice-thickness",
	});
}

export default Component;
