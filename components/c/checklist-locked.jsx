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
		"content": `<style>.f1y0r1bet {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 2.5h3.5V6H3Zm6.5 1.75H21M3 9h3.5v3.5H3Zm6.5 1.75h8M3 15.5h3.5V19H3v-3.5m6.5 1.75h2.7m2.8.25h6v4h-6Zm1.5 0v-1a1.5 1.5 0 0 1 3 0v1");
}
</style><path class="f1y0r1bet"/>`,
		"fallback": "uix-sharp:checklist-locked",
	});
}

export default Component;
