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
		"content": `<style>.pdkosxvld {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 13.5h11V19h-11Zm2.5 0V9l3.5-3.5L20 9v4.5Zm-10.5-2q1.5-1.5 3 0t3 0m-6 5.5h8");
}
</style><path class="pdkosxvld"/>`,
		"fallback": "uix-sharp:cable-landing-station",
	});
}

export default Component;
