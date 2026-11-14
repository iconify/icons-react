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
		"content": `<style>.ux4uffbbl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5.5 21.5l5-19h3l5 19M3.5 7h17m-15 4.5h13m-10.25 0l10.25 10m-2.75-10L5.5 21.5");
}
</style><path class="ux4uffbbl"/>`,
		"fallback": "uix-sharp:electricity-pylon",
	});
}

export default Component;
