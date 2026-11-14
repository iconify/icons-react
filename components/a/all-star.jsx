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
		"content": `<style>.hpg-4hyhv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12.625 6.125l.256.869a1.75 1.75 0 0 0 1.678 1.256h1.04A.689.689 0 0 1 16 9.5l-.719.513a1.75 1.75 0 0 0-.653 1.946l.247.791a.703.703 0 0 1-1.08.782l-.778-.555a1.75 1.75 0 0 0-2.034 0l-.778.555a.703.703 0 0 1-1.08-.782l.247-.791a1.75 1.75 0 0 0-.653-1.946L8 9.5a.689.689 0 0 1 .401-1.25h1.04a1.75 1.75 0 0 0 1.678-1.256l.256-.869a.651.651 0 0 1 1.25 0M4 18h16l-1.5 1.75L20 21.5H4l1.5-1.75Z");
}
</style><path class="hpg-4hyhv"/>`,
		"fallback": "uix:all-star",
	});
}

export default Component;
