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
		"content": `<style>.b_eynumen {
  d: path("M19.5 14c2-2 2-5.5-.5-7.5");
}

.tu2ohqb1r {
  d: path("M7.5 6a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0ZM4 12.25h15.5v3.5H4Zm2 3.5C4.25 17 3.5 19 3.5 21.5M16 15.75C17.75 17 18.5 19 18.5 21.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="tu2ohqb1r"/><path class="b_eynumen"/></g>`,
		"fallback": "uix-sharp:choke-hold",
	});
}

export default Component;
