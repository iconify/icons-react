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
		"content": `<style>.mwjyxhb-l {
  d: path("M4 4.5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2V15l-1.5 1.5v5h-13v-5L4 15Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v110pebju {
  d: path("M7 5.5h10v7H7ZM8.5 19h7");
}
</style><g class="ulnmmdpxh"><path class="mwjyxhb-l"/><path class="v110pebju"/></g>`,
		"fallback": "uix-sharp:game-cartridge",
	});
}

export default Component;
