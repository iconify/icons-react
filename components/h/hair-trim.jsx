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
		"content": `<style>.lr5sv_bwn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 7.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm0 9a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0ZM7 9l9 7.5M7 15l9-7.5m3.5-5c-2 4 2 8 0 12.5m-2 6.5l2-6.5l2 6.5");
}
</style><path class="lr5sv_bwn"/>`,
		"fallback": "uix-sharp:hair-trim",
	});
}

export default Component;
