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
		"content": `<style>.g68dpgs0e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 4h18M8 4v17m8-17v17M8 9h8m-8 4h8m-8 4h8");
}
</style><path class="g68dpgs0e"/>`,
		"fallback": "uix-sharp:escape-ladder",
	});
}

export default Component;
