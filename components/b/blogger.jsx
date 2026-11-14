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
		"content": `<style>.buc1eacuy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 6a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm-3 7.5c0-1 2.5-1.75 6-1.75s6 .75 6 1.75m-13.5 0h15V20h-15Zm-2 6.5h19M8 16.75h5");
}
</style><path class="buc1eacuy"/>`,
		"fallback": "uix-sharp:blogger",
	});
}

export default Component;
