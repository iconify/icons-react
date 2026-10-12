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
		"content": `<style>.c5b24hbya {
  d: path("m8.5 14.25l1.75-4.5l1.75 4.5m-2.9-1.5h2.3m2.6 1.5v-4.5h2M14 12h1.5");
}

.hg_gmpbba {
  d: path("M2.75 7.75v-5h5m8.5 0h5v5m0 8.5v5h-5m-8.5 0h-5v-5M6 7.5h12v9H6z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="hg_gmpbba"/><path class="c5b24hbya"/></g>`,
		"fallback": "iconoven:autofocus-sharp",
	});
}

export default Component;
