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
		"content": `<style>.chlh2bctx {
  d: path("M2.5 14.75h4.75L12 9.25l4.75 5.5h4.75");
}

.s-li9ut8m {
  d: path("M5.25 14.75a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM10 9.25a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm4.75 5.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wrcg6qhaf {
  d: path("M2.5 4.5h19v15h-19Z");
}
</style><g class="ulnmmdpxh"><path class="wrcg6qhaf"/><path class="chlh2bctx"/><path class="s-li9ut8m"/></g>`,
		"fallback": "uix-sharp:bead-maze",
	});
}

export default Component;
