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
		"content": `<style>.c9pie-asr {
  d: path("M7 10c-1.5 2-1.5 8.25 0 10.25M17 10c1.5 2 1.5 8.25 0 10.25");
}

.oet3icbcg {
  d: path("M2.75 9.75h18.5V20.5H2.75zm3.75 0C6.5 6.5 9 4.5 12 4.5s5.5 2 5.5 5.25m-8 0v-2.5h5v2.5m-5 3h5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="oet3icbcg"/><path class="c9pie-asr"/></g>`,
		"fallback": "iconoven:duffel-bag-sharp",
	});
}

export default Component;
