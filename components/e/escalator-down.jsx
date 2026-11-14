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
		"content": `<style>.puyexzj2y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 5.5h4.5l9 9H21M3 10h3.5v3h3v3h3v3H21M3 5.5V10m18 4.5V19");
}
</style><path class="puyexzj2y"/>`,
		"fallback": "uix-sharp:escalator-down",
	});
}

export default Component;
