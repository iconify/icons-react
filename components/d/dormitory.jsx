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
		"content": `<style>.ieoboacug {
  d: path("M7 11.5V21m0-6.5h10V21M7 18h10");
}

.shd3azbcg {
  d: path("M3.5 9L12 3l8.5 6v12h-17Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="shd3azbcg"/><path class="ieoboacug"/></g>`,
		"fallback": "uix-sharp:dormitory",
	});
}

export default Component;
