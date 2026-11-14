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
		"content": `<style>.d20w4197e {
  d: path("M3 10q3-2.5 6.25 0t6.25 0v11m0-11l5-5");
}

.p58xsb53w {
  d: path("M3 21V10l5-5q3-2.5 6.25 0t6.25 0v11l-5 5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="p58xsb53w"/><path class="d20w4197e"/></g>`,
		"fallback": "uix-sharp:foam-block",
	});
}

export default Component;
