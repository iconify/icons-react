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
		"content": `<style>.bte06bbzf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 3.5h17v17h-17Zm0 17l17-17m-12.25 17L20.5 8.25M13 20.5l7.5-7.5");
}
</style><path class="bte06bbzf"/>`,
		"fallback": "uix-sharp:half-day",
	});
}

export default Component;
