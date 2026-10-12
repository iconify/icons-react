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
		"content": `<style>.g2y9u263h {
  d: path("M7.5 12.75L10.75 16l2-2l3.75 3.75m0-3.25v3.25h-3.25");
}

.lt3jh4vra {
  d: path("M3.75 10.5V9.25h1.38a2.25 2.25 0 1 1 4.24 0h5.26a2.25 2.25 0 1 1 4.24 0h1.38v12H3.75v-2.5Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="lt3jh4vra"/><path class="g2y9u263h"/></g>`,
		"fallback": "iconoven:bear-market-sharp",
	});
}

export default Component;
