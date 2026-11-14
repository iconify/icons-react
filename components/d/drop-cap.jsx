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
		"content": `<style>.us657oqgi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3.5h7.5V11H3Zm10.5 1H21M13.5 10H19M3 15.5h18m-18 5h13");
}
</style><path class="us657oqgi"/>`,
		"fallback": "uix-sharp:drop-cap",
	});
}

export default Component;
