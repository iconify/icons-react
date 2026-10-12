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
		"content": `<style>.q0wju_ygz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 3.75h2.5c0 5.5.5 11 1.75 16.5H2.75Zm18.5 0h-2.5c0 5.5-.5 11-1.75 16.5h4.25Zm-16 0h13.5m-10 4h6.5v4.5h-6.5z");
}
</style><path class="q0wju_ygz"/>`,
		"fallback": "iconoven:cinema-screen-sharp",
	});
}

export default Component;
