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
		"content": `<style>.hh4dxva8q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 9.5h18v11H3Zm.25 0L2.5 6l17-3l.75 3.5Zm5-4.75L10 8.25m3.5-4.5l1.75 3.5");
}
</style><path class="hh4dxva8q"/>`,
		"fallback": "uix-sharp:clapperboard",
	});
}

export default Component;
