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
		"content": `<style>.u2iqf9blq {
  d: path("M9 10a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm2.5 4.75a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vdv38mb_k {
  d: path("M6 5c9-1 15 6 13.5 16C10 20 4.5 14 6 5ZM3.5 2.75L6 5");
}
</style><g class="ulnmmdpxh"><path class="vdv38mb_k"/><path class="u2iqf9blq"/></g>`,
		"fallback": "uix-sharp:disease-rot",
	});
}

export default Component;
