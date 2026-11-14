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
		"content": `<style>.ln93zybno {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 20.5L4.25 16h5.5l1.75 4.5Zm10 0l1.75-4.5h5.5l1.75 4.5Zm-5-7.25l1.75-4.5h5.5l1.75 4.5ZM12 3v2.5m-5-1L8.5 6M17 4.5L15.5 6");
}
</style><path class="ln93zybno"/>`,
		"fallback": "uix-sharp:commodity-gold",
	});
}

export default Component;
