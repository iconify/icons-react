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
		"content": `<style>.brk4pbmcu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 7.25h18.5v13H2.75zM5 4.5h3.5v2.75H5zm10.5 0H19v2.75h-3.5zM5.25 13.75h3.5M7 12v3.5m8.25-1.75h3.5");
}
</style><path class="brk4pbmcu"/>`,
		"fallback": "iconoven:car-battery-sharp",
	});
}

export default Component;
