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
		"content": `<style>.h96jyearr {
  d: path("m18 21.75l-3-3.25a2.1 2.1 0 0 1 3-2.75a2.1 2.1 0 0 1 3 2.75Z");
}

.jhknzacet {
  d: path("M21 12.867V4.5q-6-.75-9 1.5q-3-2.25-9-1.5v14q6-.75 9 1.5a7 7 0 0 1 .48-.329M12 6v10.3m0 2.1V20");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="jhknzacet"/><path class="h96jyearr"/></g>`,
		"fallback": "uix-sharp:book-open-heart",
	});
}

export default Component;
