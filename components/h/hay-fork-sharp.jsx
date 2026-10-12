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
		"content": `<style>.wsdvd4d9i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 21.25C2.75 17.5 5.5 15 9.25 15h1c3.75 0 6.5 2.5 6.5 6.25Zm3.5-2.5L7.5 17.5m2.5 1V17m3.25 1.75L12 17.5m9.25-14.75l-7 7M13 8.5l2.5 2.5M13 8.5L9.5 12m6-1L12 14.5");
}
</style><path class="wsdvd4d9i"/>`,
		"fallback": "iconoven:hay-fork-sharp",
	});
}

export default Component;
