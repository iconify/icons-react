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
		"content": `<style>.em4j34a7u {
  d: path("M2.5 6h19v12h-19Z");
}

.kh1exgb2y {
  d: path("M5.25 11.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm3.5 1.5l1 1M13 12h5.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="em4j34a7u"/><path class="kh1exgb2y"/></g>`,
		"fallback": "uix-sharp:input-search",
	});
}

export default Component;
