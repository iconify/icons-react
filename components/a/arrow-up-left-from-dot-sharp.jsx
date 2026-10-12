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
		"content": `<style>.jy21qbboq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M18.75 18.75L5.25 5.25m10.5 0H5.25v10.5");
}
</style><path class="jy21qbboq"/>`,
		"fallback": "iconoven:arrow-up-left-from-dot-sharp",
	});
}

export default Component;
