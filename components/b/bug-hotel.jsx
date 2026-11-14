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
		"content": `<style>.m7qchdk-i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 10.5L12 3.25l8.5 7.25v10h-17Zm0 0h17m-17 5h17m-8.5-5v5m-3 0v5");
}
</style><path class="m7qchdk-i"/>`,
		"fallback": "uix-sharp:bug-hotel",
	});
}

export default Component;
