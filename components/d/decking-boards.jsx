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
		"content": `<style>.ys-70g1vh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 5h10l4.5 14h-19Zm3.25 0l-1.5 14m5-14l1.5 14m-10.5-7H9.5m4.75-3h4");
}
</style><path class="ys-70g1vh"/>`,
		"fallback": "uix-sharp:decking-boards",
	});
}

export default Component;
