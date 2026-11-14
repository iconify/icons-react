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
		"content": `<style>.hpi-asn8f {
  d: path("M8.75 14.75L7.5 21.5l4.5-2.25l4.5 2.25l-1.25-6.75M10.75 8l1.5-1.25v5.5");
}

.k71qq8bfi {
  d: path("m12 2.5l1.488 1.446l2.012-.508l.566 1.996L18.062 6l-.508 2.012L19 9.5l-1.446 1.488l.508 2.012l-1.996.566l-.566 1.996l-2.012-.508L12 16.5l-1.488-1.446l-2.012.508l-.566-1.996L5.938 13l.508-2.012L5 9.5l1.446-1.488L5.938 6l1.996-.566l.566-1.996l2.012.508Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="k71qq8bfi"/><path class="hpi-asn8f"/></g>`,
		"fallback": "uix-sharp:first-place-ribbon",
	});
}

export default Component;
