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
		"content": `<style>.hbamb061q {
  d: path("M3.5 5h17v15.5h-17ZM8 3v4m8-4v4M3.5 10h17m-12 5.25h7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wilanfbqy {
  d: path("m13 12.75l2.5 2.5l-2.5 2.5");
}
</style><g class="ulnmmdpxh"><path class="hbamb061q"/><path class="wilanfbqy"/></g>`,
		"fallback": "uix-sharp:calendar-arrow-right",
	});
}

export default Component;
