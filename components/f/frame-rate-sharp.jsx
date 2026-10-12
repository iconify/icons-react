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
		"content": `<style>.l5j-9cciu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.25 2.75h11v18.5h-11zm0 6.15h11m-11 6.2h11M9.5 5.5V6m0 12v.5m6.5-13V6m0 12v.5M2.75 9h2m-2 3h2.5m-2.5 3h2");
}
</style><path class="l5j-9cciu"/>`,
		"fallback": "iconoven:frame-rate-sharp",
	});
}

export default Component;
