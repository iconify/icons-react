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
		"content": `<style>.gbjw2lvts {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 5.5A1.5 1.5 0 0 1 4 4h3.75a1.5 1.5 0 0 1 1.5 1.5V11a1.5 1.5 0 0 1-1.5 1.5H5L2.5 15Zm19 5.5A1.5 1.5 0 0 0 20 9.5h-3.75a1.5 1.5 0 0 0-1.5 1.5v5.5a1.5 1.5 0 0 0 1.5 1.5H19l2.5 2.5ZM12 3v18");
}
</style><path class="gbjw2lvts"/>`,
		"fallback": "uix-sharp:debate",
	});
}

export default Component;
