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
		"content": `<style>.pu8yybb6x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 2.75H13m-2.25 0v4.5m-5.5 0h11v14h-11zm0 5.25h11m0-2.75h4v8.5h-4");
}
</style><path class="pu8yybb6x"/>`,
		"fallback": "iconoven:french-press-sharp",
	});
}

export default Component;
