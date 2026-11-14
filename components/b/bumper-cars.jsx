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
		"content": `<style>.abl8pqbwa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 14.5h19V20h-19Zm2.5 0V9h5l2 3h6a2.5 2.5 0 0 1 2.5 2.5M7.5 9V2.5m6 9.5L15 9.5");
}
</style><path class="abl8pqbwa"/>`,
		"fallback": "uix-sharp:bumper-cars",
	});
}

export default Component;
