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
		"content": `<style>.fbr5wkb-n {
  d: path("M2.5 12a9.5 7.5 0 1 0 19 0a9.5 7.5 0 1 0-19 0Z");
}

.lkz2-8bjm {
  d: path("M8 8h8v8H8Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uta6wk6wt {
  d: path("m8 15l3.5-3.5L15 15");
}
</style><g class="ulnmmdpxh"><path class="fbr5wkb-n"/><path class="lkz2-8bjm"/><path class="uta6wk6wt"/></g>`,
		"fallback": "uix-sharp:immersive-gallery",
	});
}

export default Component;
