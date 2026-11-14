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
		"content": `<style>.hii2-cc5r {
  d: path("M3 12a3 5 0 1 0 6 0a3 5 0 1 0-6 0Zm9.5-5v10m3-10v10M6 12h.01");
}

.pphsu-i_k {
  d: path("M6 7h12.5a2.5 5 0 0 1 0 10H6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="pphsu-i_k"/><path class="hii2-cc5r"/></g>`,
		"fallback": "uix-sharp:body-wrap",
	});
}

export default Component;
