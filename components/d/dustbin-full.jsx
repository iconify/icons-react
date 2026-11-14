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
		"content": `<style>.c67x9fbec {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 9h15L18 19.75a2 2 0 0 1-2 1.75H8a2 2 0 0 1-2-1.75Zm2 0c0-3.5 3-5 5-3.5C13 3 18 3.75 17.5 9M10 12.5V18m4-5.5V18");
}
</style><path class="c67x9fbec"/>`,
		"fallback": "uix-sharp:dustbin-full",
	});
}

export default Component;
