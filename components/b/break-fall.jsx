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
		"content": `<style>.qdzqazyhg {
  d: path("M5 12.5a7 7 0 0 1 14 0");
}

.tifnew2bo {
  d: path("m16.5 10l2.5 2.5l2.5-2.5M3 16h18v3.5H3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="qdzqazyhg"/><path class="tifnew2bo"/></g>`,
		"fallback": "uix-sharp:break-fall",
	});
}

export default Component;
