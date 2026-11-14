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
		"content": `<style>.amfjlc-na {
  d: path("M2.5 4v17m19-17v17M2.5 5q9.5 10 19 0");
}

.h7eigqbck {
  d: path("M5 9.75a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm5.5 1.75a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0ZM16 9.75a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="amfjlc-na"/><path class="h7eigqbck"/></g>`,
		"fallback": "uix-sharp:camp-string-lights",
	});
}

export default Component;
