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
		"content": `<style>.n6h92p9_o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3h19v7.5h-19ZM9 3v7.5M15 3v7.5m3 3.75c.25 2.5 1.25 3.5 3.75 3.75c-2.5.25-3.5 1.25-3.75 3.75c-.25-2.5-1.25-3.5-3.75-3.75c2.5-.25 3.5-1.25 3.75-3.75Z");
}
</style><path class="n6h92p9_o"/>`,
		"fallback": "uix-sharp:data-enrich",
	});
}

export default Component;
