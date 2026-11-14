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
		"content": `<style>.nihqynb_y {
  d: path("M10.25 9a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm6 6a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm-5.25.5l7-7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vjsz6sbns {
  d: path("m2.5 12l5-6.5h14v13h-14Zm4.75 0h.01");
}
</style><g class="ulnmmdpxh"><path class="vjsz6sbns"/><path class="nihqynb_y"/></g>`,
		"fallback": "uix-sharp:employee-discount",
	});
}

export default Component;
