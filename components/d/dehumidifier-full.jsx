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
		"content": `<style>.lh4cg8bag {
  d: path("M15.2 21.5H5v-19h14v9.2");
}

.q42kh_7ju {
  d: path("M8.5 13.5h5v5h-5Zm0-7.5h7m-7 3h7m2.5 5.5V18m0 3h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="lh4cg8bag"/><path class="q42kh_7ju"/></g>`,
		"fallback": "uix-sharp:dehumidifier-full",
	});
}

export default Component;
