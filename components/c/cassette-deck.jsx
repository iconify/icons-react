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
		"content": `<style>.mx94nrbna {
  d: path("M6.5 7.5h11a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1Zm2.5 3h.01m5.99 0h.01M7 16.5h10");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wrcg6qhaf {
  d: path("M2.5 4.5h19v15h-19Z");
}
</style><g class="ulnmmdpxh"><path class="wrcg6qhaf"/><path class="mx94nrbna"/></g>`,
		"fallback": "uix-sharp:cassette-deck",
	});
}

export default Component;
