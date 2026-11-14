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
		"content": `<style>.cvmwalbfb {
  d: path("M6 11h12v10.5H6Z");
}

.le6zdmbko {
  d: path("M8.5 11C5 11.5 3 8.5 5 6.25C5 3.5 8.5 2 10.5 3.75c1.5-1.75 5-1.5 6 .75c3 0 4.5 4 2 5.75c-.75.75-1.75.75-3 .75M9 21.5v-4h6v4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="cvmwalbfb"/><path class="le6zdmbko"/></g>`,
		"fallback": "uix-sharp:avalanche-airbag",
	});
}

export default Component;
