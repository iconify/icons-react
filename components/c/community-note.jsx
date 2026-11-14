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
		"content": `<style>.cp-1d2tbx {
  d: path("M2.5 6.5a2 2 0 0 1 2-2H16l5.5 5.5v7.5a2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2Z");
}

.nodwwzb4z {
  d: path("M16 4.5V10h5.5M6 9h6.5M6 12.75h12M6 16.5h8");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="cp-1d2tbx"/><path class="nodwwzb4z"/></g>`,
		"fallback": "uix-sharp:community-note",
	});
}

export default Component;
