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
		"content": `<style>.bauwzxbvg {
  d: path("M2.5 3.5h19V10h-19Zm2 6.5v10.5h15V10M7 6.75h.01m4.99 0h.01m4.99 0h.01");
}

.tp7u0ubgd {
  d: path("M9.5 20.5v-7h5v7m-2.5-7v7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="bauwzxbvg"/><path class="tp7u0ubgd"/></g>`,
		"fallback": "uix-sharp:cinema-hall",
	});
}

export default Component;
