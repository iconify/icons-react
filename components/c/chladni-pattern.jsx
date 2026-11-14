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
		"content": `<style>.j_psw1y4g {
  d: path("M3 3h18v18H3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.znqg-8p4t {
  d: path("M7 7q5 5 10 0q-5 5 0 10q-5-5-10 0q5-5 0-10Z");
}
</style><g class="ulnmmdpxh"><path class="j_psw1y4g"/><path class="znqg-8p4t"/></g>`,
		"fallback": "uix-sharp:chladni-pattern",
	});
}

export default Component;
