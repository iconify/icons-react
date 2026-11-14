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
		"content": `<style>.g74-f_bqb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 5h18v8H3Zm3.5 4h11M7 16c0 2 2 2 2 4m3-4c0 2 2 2 2 4m3-4c0 2 2 2 2 4");
}
</style><path class="g74-f_bqb"/>`,
		"fallback": "uix-sharp:central-air-conditioning",
	});
}

export default Component;
