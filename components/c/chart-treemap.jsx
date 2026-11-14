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
		"content": `<style>.om67rqbiz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3h18v18H3Zm9.5 0v18m0-10H21M3 14h9.5m4.25-3v10");
}
</style><path class="om67rqbiz"/>`,
		"fallback": "uix-sharp:chart-treemap",
	});
}

export default Component;
