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
		"content": `<style>.hm6vpjbdw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 4.75h18.5v8.5H2.75zM6.25 10h11.5M7.5 16.25c0 1.5-1 2-1 3.5m5.5-3.5v4.5m4.5-4.5c0 1.5 1 2 1 3.5");
}
</style><path class="hm6vpjbdw"/>`,
		"fallback": "iconoven:air-conditioner-sharp",
	});
}

export default Component;
