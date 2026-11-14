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
		"content": `<style>.s7tnb7bch {
  d: path("M4.5 17.5v-7a7.5 7.5 0 0 1 15 0v7Zm2 0h11v4h-11Z");
}

.t2i-hdcdm {
  d: path("M8.5 8h7a1 1 0 0 1 1 1v4.5a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="s7tnb7bch"/><path class="t2i-hdcdm"/></g>`,
		"fallback": "uix-sharp:hero-astronaut",
	});
}

export default Component;
