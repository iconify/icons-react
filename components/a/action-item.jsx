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
		"content": `<style>.b0pkgbbgy {
  d: path("M2.5 6.75H13v10.5H2.5ZM16 12h5.5");
}

.c5kihbcac {
  d: path("m5.25 12.25l2 2L10 10.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="b0pkgbbgy"/><path class="c5kihbcac"/></g>`,
		"fallback": "uix-sharp:action-item",
	});
}

export default Component;
