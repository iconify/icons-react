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
		"content": `<style>.liufcib2a {
  d: path("M10.5 2.5C10.5 7 4 7.5 4 12s6.5 5 6.5 9.5m-3.25-11L17 14.75M7.25 13.5L17 9.25m-.25 6.25a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm0-7a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z9wgfgbyg {
  d: path("M4 2.5c0 4.5 6.5 5 6.5 9.5S4 17 4 21.5");
}
</style><g class="ulnmmdpxh"><path class="z9wgfgbyg"/><path class="liufcib2a"/></g>`,
		"fallback": "uix-sharp:dna-scissors",
	});
}

export default Component;
