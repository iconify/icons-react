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
		"content": `<style>.as4vzu3je {
  d: path("M8.5 3q4 9 0 18q-4-9 0-18Z");
}

.ev2a68btr {
  d: path("M3.5 7.5h5l12 4.5m-17 4.5h5l12-4.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="as4vzu3je"/><path class="ev2a68btr"/></g>`,
		"fallback": "uix-sharp:convex-lens-rays",
	});
}

export default Component;
