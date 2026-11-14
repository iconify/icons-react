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
		"content": `<style>.pmtlx1b5v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12.5h19m-19 5C6 15 9 15 12 17.5s6 2.5 9.5 0m-5-14l3.25 6h-6.5Zm0 6v3");
}
</style><path class="pmtlx1b5v"/>`,
		"fallback": "uix-sharp:floodplain",
	});
}

export default Component;
