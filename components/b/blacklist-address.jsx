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
		"content": `<style>.iuz4k68jh {
  d: path("M8.9 5h12.6v12.6M15.1 19H2.5V6.4");
}

.o4-e0nbwg {
  d: path("M15.5 8H19v3.5h-3.5Zm-10 7.5H10m-6.5-12l17 17");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="iuz4k68jh"/><path class="o4-e0nbwg"/></g>`,
		"fallback": "uix-sharp:blacklist-address",
	});
}

export default Component;
