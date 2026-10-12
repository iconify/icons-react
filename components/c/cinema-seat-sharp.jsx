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
		"content": `<style>.pdq4xwbvd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.25 2.75h11.5v9.5H6.25zm-.5 12.5h12.5v4.5H5.75zm-3-3.75v9.75m18.5-9.75v9.75");
}
</style><path class="pdq4xwbvd"/>`,
		"fallback": "iconoven:cinema-seat-sharp",
	});
}

export default Component;
