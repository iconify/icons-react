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
		"content": `<style>.p5xr4h38n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 6.5h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-14a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1ZM21 10v4M6.5 10.25v3.5");
}
</style><path class="p5xr4h38n"/>`,
		"fallback": "uix-sharp:burnout-battery",
	});
}

export default Component;
