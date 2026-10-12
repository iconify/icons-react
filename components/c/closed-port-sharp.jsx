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
		"content": `<style>.tyru41bxj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.75 11.75h10.5v7.5H6.75zm2.25 0V8a3 3 0 0 1 6 0v3.75m-4.5 2.75v2m3-2v2");
}
</style><path class="tyru41bxj"/>`,
		"fallback": "iconoven:closed-port-sharp",
	});
}

export default Component;
