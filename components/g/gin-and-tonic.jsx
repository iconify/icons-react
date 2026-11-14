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
		"content": `<style>.x168cabci {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 6h11l-1 15.5H5Zm8 0a4 4 0 0 1 8 0Zm4 0V2.5M6 11h7.5");
}
</style><path class="x168cabci"/>`,
		"fallback": "uix-sharp:gin-and-tonic",
	});
}

export default Component;
