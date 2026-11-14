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
		"content": `<style>.exkjr1bte {
  d: path("M10 15c0-1.5 2-3 2-3s2 1.5 2 3c0 1.25-1 2-2 2s-2-.75-2-2");
}

.n1tb-gltl {
  d: path("M10 3.5h4V7c0 1.5 3 2 3 5v7a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-7c0-3 3-3.5 3-5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="n1tb-gltl"/><path class="exkjr1bte"/></g>`,
		"fallback": "uix-sharp:cooking-oil-bottle",
	});
}

export default Component;
