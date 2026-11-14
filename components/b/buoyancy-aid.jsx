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
		"content": `<style>.vhbom7bgw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 3c0 3.5 1.5 5.5 3.5 5.5s3.5-2 3.5-5.5H18c0 3 1.5 4.5 2.5 5v12a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 20V8C4.5 7.5 6 6 6 3ZM12 8.5v13m-8.5-7h17");
}
</style><path class="vhbom7bgw"/>`,
		"fallback": "uix-sharp:buoyancy-aid",
	});
}

export default Component;
