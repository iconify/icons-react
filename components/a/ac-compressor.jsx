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
		"content": `<style>.n3nmy5b9e {
  d: path("M9 6.75V5a2 2 0 0 0-2-2H4.5M15 6.75V5a2 2 0 0 1 2-2h2.5M9.25 13.5a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yxn0cwbom {
  d: path("M4.5 13.5a7.5 7.5 0 1 0 15 0a7.5 7.5 0 1 0-15 0Z");
}
</style><g class="ulnmmdpxh"><path class="yxn0cwbom"/><path class="n3nmy5b9e"/></g>`,
		"fallback": "uix-sharp:ac-compressor",
	});
}

export default Component;
