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
		"content": `<style>.ibog3l0zd {
  d: path("M10.2 15H2.5V3.5h13v6.7");
}

.u7rj5sb1w {
  d: path("m7.5 6.75l4 2.5l-4 2.5ZM16 17.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm1.5-3.5v-1m0 8v1M14 17.5h-1m8 0h1M15 15l-.75-.75M20 20l.75.75M20 15l.75-.75M15 20l-.75.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ibog3l0zd"/><path class="u7rj5sb1w"/></g>`,
		"fallback": "uix-sharp:brightness-player",
	});
}

export default Component;
