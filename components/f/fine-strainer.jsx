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
		"content": `<style>.sch6dw_rd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 8h13L10 19.5Zm13 0l4-4m-14 7.5h7M8.25 15h3.5");
}
</style><path class="sch6dw_rd"/>`,
		"fallback": "uix-sharp:fine-strainer",
	});
}

export default Component;
