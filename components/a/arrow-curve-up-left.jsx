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
		"content": `<style>.uhir2-m7c {
  d: path("M16 21v-7c0-2-.75-3.75-2-5L8 3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.usxb4tbdz {
  d: path("M13 3H8v5");
}
</style><g class="ulnmmdpxh"><path class="uhir2-m7c"/><path class="usxb4tbdz"/></g>`,
		"fallback": "uix-sharp:arrow-curve-up-left",
	});
}

export default Component;
