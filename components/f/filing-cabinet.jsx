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
		"content": `<style>.tbslz6b4b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 7h18v7H3Zm1.5 7v5.5a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V14m-13-7V3.5h11V7M10 10.5h4m-4 7.25h4");
}
</style><path class="tbslz6b4b"/>`,
		"fallback": "uix-sharp:filing-cabinet",
	});
}

export default Component;
