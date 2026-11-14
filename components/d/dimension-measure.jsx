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
		"content": `<style>.vc3j7_2rv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 2.5h13V15h-13Zm2 15l-2 1.5l2 1.5m-2-1.5h13m-2-1.5l2 1.5l-2 1.5m4.5-16l1.5-2l1.5 2m-1.5-2V15M18 13l1.5 2l1.5-2");
}
</style><path class="vc3j7_2rv"/>`,
		"fallback": "uix-sharp:dimension-measure",
	});
}

export default Component;
