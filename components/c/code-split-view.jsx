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
		"content": `<style>.h0okt56_g {
  d: path("m8.75 8.5l-3 3.5l3 3.5m6.5-7l3 3.5l-3 3.5");
}

.iiwnuubed {
  d: path("M2.5 4h19v16h-19ZM12 4v16");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="iiwnuubed"/><path class="h0okt56_g"/></g>`,
		"fallback": "uix-sharp:code-split-view",
	});
}

export default Component;
