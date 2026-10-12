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
		"content": `<style>.f0ewvgbqe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 5.75L9 18.25m6-12.5l-1.5 12.5m-6.5-9h10m-10.75 5.5h10M2.75 12h2.5m13.5 0h2.5m-1.5-1.75l1.5 1.75l-1.5 1.75");
}
</style><path class="f0ewvgbqe"/>`,
		"fallback": "iconoven:hash-function-sharp",
	});
}

export default Component;
