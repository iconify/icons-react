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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w668w5bwo {
  d: path("M10 13a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm-7.25 0H10m4 0h7.25M12 15v6.5M9 9a5 5 0 0 1 6 0M7.5 7a7.5 7.5 0 0 1 9 0");
}

.zdgu3ybil {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0Z");
}
</style><g class="ulnmmdpxh"><path class="zdgu3ybil"/><path class="w668w5bwo"/></g>`,
		"fallback": "uix-sharp:car-horn",
	});
}

export default Component;
