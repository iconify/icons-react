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
		"content": `<style>.ajx-b798k {
  d: path("M7 10.5c0 3.607 3.747 5.195 6.865 4.438m1.328-.491A5.2 5.2 0 0 0 16.5 13.5c2.5-2.5 2-6.5-.5-9M14.75 18l2 2L21 15.75");
}

.bye8libtl {
  d: path("M10.5 10.5h.01m3.49 0c0-4.75-6.5-6-9.5-3c-2.5 2.5-2 6.5.5 9");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="bye8libtl"/><path class="ajx-b798k"/></g>`,
		"fallback": "uix-sharp:galaxy-check",
	});
}

export default Component;
