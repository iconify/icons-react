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
		"content": `<style>.eb5j6xk6d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M16.75 3.75a2.75 2.75 0 1 1 0 5.5a2.75 2.75 0 1 1 0-5.5m-12.5 16h11.5m-11.5 0l8.5-10");
}
</style><path class="eb5j6xk6d"/>`,
		"fallback": "iconoven:degree-sign-sharp",
	});
}

export default Component;
