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
		"content": `<style>.f9k7qknhy {
  d: path("M6.5 10.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm-1 5.5c0-1.5 1.3-2.5 3-2.5s3 1 3 2.5m3-6h4m-4 4h3");
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
</style><g class="ulnmmdpxh"><path class="wrcg6qhaf"/><path class="f9k7qknhy"/></g>`,
		"fallback": "uix-sharp:contact-card",
	});
}

export default Component;
