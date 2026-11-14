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
		"content": `<style>.b1ck17btk {
  d: path("M8.5 13a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm3.5 0h5.25M15 13v2m2.25-2v2");
}

.t3j8fsq7h {
  d: path("M3.5 21.5v-19m0 2.5h17m-14 2.5H20v11H6.5ZM9 5v2.5M17.5 5v2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="t3j8fsq7h"/><path class="b1ck17btk"/></g>`,
		"fallback": "uix-sharp:for-rent-sign",
	});
}

export default Component;
