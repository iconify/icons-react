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
		"content": `<style>.zb815c67w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 13.5c-.5-3.5 1-7 3.5-7C8.75 6.5 9 9 9.75 9s1-2.5 2.75-2.5s2 3.5 3 3.5L17 4h3l1.5 2l-2 .75c.25 2.75 0 6.75-1.5 6.75Zm1.5 0v6m3-6v6m6-6v6m3-6v6m-14.5 0h19");
}
</style><path class="zb815c67w"/>`,
		"fallback": "uix-sharp:camel",
	});
}

export default Component;
