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
		"content": `<style>.ygcatlbmv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 14h11L16 21H8Zm5.5 0V8m0 2c0-3-2.5-5-5.5-5c0 3 2.5 5 5.5 5Zm0-2c0-2.5 2-4.5 5-4.5C17 6 15 8 12 8Z");
}
</style><path class="ygcatlbmv"/>`,
		"fallback": "uix-sharp:garden-cover",
	});
}

export default Component;
