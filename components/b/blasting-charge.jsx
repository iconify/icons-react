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
		"content": `<style>.rnm6geiue {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 10h6v11.5h-6Zm3 0c0-2.5 3.5-1.5 3.5-4m-6.5 7.5h6M13 4V2.25m1.5 2.25L16 3m-1 3h2");
}
</style><path class="rnm6geiue"/>`,
		"fallback": "uix-sharp:blasting-charge",
	});
}

export default Component;
