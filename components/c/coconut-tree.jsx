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
		"content": `<style>.tbf688bdc {
  fill: currentColor;
  d: path("M8.75 9.75a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm3.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xdx3c0bls {
  d: path("M9.5 21.5c1-5 2.25-10 2.5-14.5m0 0C9 5 5 5.5 2.5 9.5C6 8.75 9 8.5 12 7Zm0 0c3-2 7-1.5 9.5 2.5C18 8.75 15 8.5 12 7Zm0 0c-.5-2.5-2.5-4.25-5.5-4.5C8.5 4 10 5.5 12 7Zm0 0c.5-2.5 2.5-4.25 5.5-4.5C15.5 4 14 5.5 12 7Z");
}
</style><g class="ulnmmdpxh"><path class="xdx3c0bls"/><path class="tbf688bdc"/></g>`,
		"fallback": "uix-sharp:coconut-tree",
	});
}

export default Component;
