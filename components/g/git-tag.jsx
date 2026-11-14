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
		"content": `<style>.i5z5tqbkm {
  d: path("M9.5 5.5h11v13h-11l-4-6.5Z");
}

.qrmre7b3r {
  d: path("M9.5 12a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm-7 0h3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="i5z5tqbkm"/><path class="qrmre7b3r"/></g>`,
		"fallback": "uix-sharp:git-tag",
	});
}

export default Component;
