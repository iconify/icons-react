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
		"content": `<style>.f2xkwab7l {
  d: path("M7.25 10a2 2 0 1 1 0 4a2 2 0 1 1 0-4Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zm0jsebhw {
  d: path("M2.75 5.25h18.5v13.5H2.75zm9 0v13.5m0-6.75h9.5");
}
</style><g class="x2cwu0gfd"><path class="zm0jsebhw"/><path class="f2xkwab7l"/></g>`,
		"fallback": "iconoven:bento-sharp",
	});
}

export default Component;
