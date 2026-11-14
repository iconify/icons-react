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
		"content": `<style>.bk9_7iect {
  d: path("M9 14.75a9 3.5 0 1 0 6 0");
}

.rznh07bjb {
  d: path("M9 18v-8l1.5-2.5v-5h3v5L15 10v8Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="bk9_7iect"/><path class="rznh07bjb"/></g>`,
		"fallback": "uix-sharp:beer-mat",
	});
}

export default Component;
