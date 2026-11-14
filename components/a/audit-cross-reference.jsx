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
		"content": `<style>.couwprbkk {
  d: path("M15 4.25L13.25 6L15 7.75");
}

.juz8w4nhz {
  d: path("M9 16.25L10.75 18L9 19.75m8.5-11.5V6h-4.25");
}

.l2l1p8o1e {
  d: path("M2.5 4A1.5 1.5 0 0 1 4 2.5h3.5l3 3v6A1.5 1.5 0 0 1 9 13H4a1.5 1.5 0 0 1-1.5-1.5Zm11 8.5A1.5 1.5 0 0 1 15 11h3.5l3 3v6a1.5 1.5 0 0 1-1.5 1.5h-5a1.5 1.5 0 0 1-1.5-1.5Zm-7 3.25V18h4.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="l2l1p8o1e"/><path class="juz8w4nhz"/><path class="couwprbkk"/></g>`,
		"fallback": "uix-sharp:audit-cross-reference",
	});
}

export default Component;
