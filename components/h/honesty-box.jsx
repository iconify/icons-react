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
		"content": `<style>.dcb6qmb6u {
  d: path("M9 8a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm-6 6h18");
}

.rf8942b8g {
  d: path("M6.25 8H5a2 2 0 0 0-2 2v8.5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2h-1.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="rf8942b8g"/><path class="dcb6qmb6u"/></g>`,
		"fallback": "uix-sharp:honesty-box",
	});
}

export default Component;
