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
		"content": `<style>.loolknbcs {
  d: path("M15 7.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm-3.5 2v7m-2.75-2.75l2.75 2.75l2.75-2.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vfh9nbcmh {
  d: path("M11 3h8.5A1.5 1.5 0 0 1 21 4.5V13l-8.5 8.5l-10-10Z");
}
</style><g class="ulnmmdpxh"><path class="vfh9nbcmh"/><path class="loolknbcs"/></g>`,
		"fallback": "uix-sharp:everyday-low-price",
	});
}

export default Component;
