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
		"content": `<style>.ts1k-8b2v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14.72 7.02a3 3 0 1 1-3.04-4.25a2.7 2.7 0 0 0 3.04 4.25ZM4 12.25h6.75v5.5H4zm9.25 0H20v5.5h-6.75zM10.75 14L12 12.75L13.25 14M4 14l-1.25-3.25M20 14l1.25-3.25");
}
</style><path class="ts1k-8b2v"/>`,
		"fallback": "iconoven:eclipse-glasses-sharp",
	});
}

export default Component;
