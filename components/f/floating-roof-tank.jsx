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
		"content": `<style>.q7bqzrbwd {
  d: path("M4 3.5v15a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-15M4 13h16");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yl7dd5x9t {
  d: path("M7 10.25h10V13H7Z");
}
</style><g class="ulnmmdpxh"><path class="q7bqzrbwd"/><path class="yl7dd5x9t"/></g>`,
		"fallback": "uix-sharp:floating-roof-tank",
	});
}

export default Component;
