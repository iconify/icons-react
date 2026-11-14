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
		"content": `<style>.b6fis-_bt {
  d: path("M3 5.25h18v13.5H3Z");
}

.ktzk7nbkm {
  d: path("M6.25 11V8.25h3m8.5 4.75v2.75h-3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="b6fis-_bt"/><path class="ktzk7nbkm"/></g>`,
		"fallback": "uix-sharp:aspect-ratio-4-3",
	});
}

export default Component;
