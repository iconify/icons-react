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
		"content": `<style>.cvnda3kco {
  d: path("M13.5 13.5q-.375-.75-1.5-.75c-1 0-1.5.5-1.5 1.25c0 1.5 3 .5 3 2c0 .75-.5 1.25-1.5 1.25q-1.125 0-1.5-.75");
}

.dz2ge811t {
  d: path("M8 15a4 4 0 1 0 8 0a4 4 0 1 0-8 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x8pw1qb7b {
  d: path("M3 8h18v14H3Zm4.5 0V6.5a4.5 4.5 0 0 1 9 0V8");
}
</style><g class="ulnmmdpxh"><path class="x8pw1qb7b"/><path class="dz2ge811t"/><path class="cvnda3kco"/></g>`,
		"fallback": "uix-sharp:escrow",
	});
}

export default Component;
