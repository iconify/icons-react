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

.wu033lb0r {
  d: path("M2.5 20c0-10.5 2.75-14 6-14s6 3.5 6 14Zm14.75-3.5h4.25V20h-4.25ZM5.5 2.5L11 7.25m.5-4.75L6 7.25");
}

.xjycnkbyz {
  d: path("M6.5 20v-3a2 2 0 0 1 4 0v3");
}
</style><g class="ulnmmdpxh"><path class="wu033lb0r"/><path class="xjycnkbyz"/></g>`,
		"fallback": "uix-sharp:beaver-lodge",
	});
}

export default Component;
