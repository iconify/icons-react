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
		"content": `<style>.sk8958bgj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.389 13.37l11.746-4.275l1.881 5.168L5.68 18.025l-1.923-.896Zm12.088-3.336l6.343-2.308l-1.622 4.315l-3.524 1.282Zm-8.373.387l3.289-1.197l.513 1.41l-3.289 1.197Zm10.957-1.327l.023 3.716");
}
</style><path class="sk8958bgj"/>`,
		"fallback": "uix-sharp:box-cutter",
	});
}

export default Component;
