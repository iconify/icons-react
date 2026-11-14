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
		"content": `<style>.bnijuzkgj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3h3.5v17H3Zm14.5 0H21v17h-3.5Zm-11 17h11m-11-9q2.75-1.5 5.5 0t5.5 0");
}
</style><path class="bnijuzkgj"/>`,
		"fallback": "uix-sharp:canal-lock",
	});
}

export default Component;
