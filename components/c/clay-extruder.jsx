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
		"content": `<style>.f1fmgtbeg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 3h12m-6 0v3M7 6h10v9.5H7Zm2.5 9.5h5l-1.5 3h-2Zm2.5 3V21");
}
</style><path class="f1fmgtbeg"/>`,
		"fallback": "uix-sharp:clay-extruder",
	});
}

export default Component;
