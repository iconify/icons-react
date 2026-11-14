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
		"content": `<style>.m16ipzbom {
  d: path("m9 18.5l4.75-6.5a2.5 2.5 0 1 0-3.5 0L15 18.5");
}

.mxjpxx18k {
  d: path("M3 4.5h18v17H3Zm5-2v4m8-4v4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="mxjpxx18k"/><path class="m16ipzbom"/></g>`,
		"fallback": "uix-sharp:awareness-day",
	});
}

export default Component;
