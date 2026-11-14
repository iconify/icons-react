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
		"content": `<style>.fhfhm4bia {
  d: path("m3 9l1.5-5h15L21 9m-1.5 2v1.4M4.5 11v9.5H12");
}

.mnbpo94gh {
  d: path("M3 9a3 3 0 0 0 6 0a3 3 0 0 0 6 0a3 3 0 0 0 6 0M6.5 20.5v-5h4v5m4.25-5.25h7V18c0 3-2 4-3.5 2.25c-1.5 1.75-3.5.75-3.5-2.25Zm2 2.75h.01m2.99 0h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="fhfhm4bia"/><path class="mnbpo94gh"/></g>`,
		"fallback": "uix-sharp:costume-shop",
	});
}

export default Component;
