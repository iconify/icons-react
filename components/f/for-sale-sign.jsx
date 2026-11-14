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
		"content": `<style>.i6u7kkbuj {
  d: path("M15.25 11.25c-.25-.75-1-1-2-1c-1.15 0-2 .6-2 1.5c0 1.75 4 1 4 2.75c0 .9-.85 1.25-2 1.25c-1.1 0-1.85-.5-2-1m2-5.5v1m0 5.5v1");
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
</style><g class="ulnmmdpxh"><path class="t3j8fsq7h"/><path class="i6u7kkbuj"/></g>`,
		"fallback": "uix-sharp:for-sale-sign",
	});
}

export default Component;
