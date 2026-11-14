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
		"content": `<style>.gjdhpublh {
  d: path("M3 3.5h18v11q-9 6.5-18 0Zm3 13v3m3-2v3m3-2.75v3m3-3.25v3m3-4v3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wr_v-yhhc {
  d: path("m12 6.5l3.5 4.25L12 15l-3.5-4.25Z");
}
</style><g class="ulnmmdpxh"><path class="gjdhpublh"/><path class="wr_v-yhhc"/></g>`,
		"fallback": "uix-sharp:embroidered-shawl",
	});
}

export default Component;
