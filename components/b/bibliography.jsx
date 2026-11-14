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
		"content": `<style>.lwmoyccic {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 14.5h19v5h-19Zm2-5h15v5h-15Zm-1-5h13v5h-13Zm15 10v5m-11-10v5m5.5-10v5");
}
</style><path class="lwmoyccic"/>`,
		"fallback": "uix-sharp:bibliography",
	});
}

export default Component;
