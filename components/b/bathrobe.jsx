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
		"content": `<style>.xmyb3uf0d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 3L4 6.5L2.5 13L6 14l1-3v10h10V11l1 3l3.5-1L20 6.5L15.5 3L12 9ZM7 14h10m-4 0l1.25 3.5");
}
</style><path class="xmyb3uf0d"/>`,
		"fallback": "uix-sharp:bathrobe",
	});
}

export default Component;
