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
		"content": `<style>.j5x4cro4e {
  d: path("M2.5 4h13v12h-13Zm13 6H17a2 2 0 0 1 2 2v3m-1.5 0h3v6.5h-3Z");
}

.t-e85zbku {
  d: path("M5.75 13H8.5v-3H11V7h1.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="j5x4cro4e"/><path class="t-e85zbku"/></g>`,
		"fallback": "uix-sharp:data-logger",
	});
}

export default Component;
