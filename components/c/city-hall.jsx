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
		"content": `<style>.cyayf_7wz {
  d: path("M10 21v-3.5a2 2 0 0 1 4 0V21m-8-6.5v3m12-3v3");
}

.tr78iebwu {
  d: path("M3 21v-9.5h5.5V6L12 2.75L15.5 6v5.5H21V21M2.5 21h19");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="tr78iebwu"/><path class="cyayf_7wz"/></g>`,
		"fallback": "uix-sharp:city-hall",
	});
}

export default Component;
