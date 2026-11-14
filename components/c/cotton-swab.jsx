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
		"content": `<style>.cuduz5b3u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m18.384 3.141l2.475 2.475l-4.243 4.243l-2.475-2.475ZM3.141 5.616l2.475-2.475l4.243 4.243l-2.475 2.475ZM15.5 8.5l-11 11m4-11l10 10");
}
</style><path class="cuduz5b3u"/>`,
		"fallback": "uix-sharp:cotton-swab",
	});
}

export default Component;
