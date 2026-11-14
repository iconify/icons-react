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
		"content": `<style>.ky1exgdcg {
  d: path("M3 8.5h18v11H3Zm2.5-3h13M8 2.5h8");
}

.segm6mgwt {
  d: path("m8.5 14l2.5 2.5l4.5-4.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ky1exgdcg"/><path class="segm6mgwt"/></g>`,
		"fallback": "uix-sharp:episodes-check",
	});
}

export default Component;
