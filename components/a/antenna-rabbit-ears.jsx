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
		"content": `<style>.wh_sdcbcz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 15h15v6h-15Zm5.5 0L6 4m8 11l4-11m-2 14h.01");
}
</style><path class="wh_sdcbcz"/>`,
		"fallback": "uix-sharp:antenna-rabbit-ears",
	});
}

export default Component;
