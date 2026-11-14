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
		"content": `<style>.kj8pc7b0l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 3.5h4A1.25 1.25 0 0 1 10 4.75v14.5a1.25 1.25 0 0 1-1.25 1.25h-4a1.25 1.25 0 0 1-1.25-1.25V4.75A1.25 1.25 0 0 1 4.75 3.5Zm12 17V4m-3.5 3.5l3.5-3.5l3.5 3.5M3.5 12H10");
}
</style><path class="kj8pc7b0l"/>`,
		"fallback": "uix-sharp:dose-increase",
	});
}

export default Component;
