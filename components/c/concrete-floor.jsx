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
		"content": `<style>.zbwrkjj2l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 4.5h9l5 15h-19Zm-2 6h13m-6.5 0v9");
}
</style><path class="zbwrkjj2l"/>`,
		"fallback": "uix-sharp:concrete-floor",
	});
}

export default Component;
