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
		"content": `<style>.g035zccsu {
  d: path("m13 8l-3.5 5h2.75L11 18.5l3.5-6.5h-2.75Z");
}

.n4qp-uoia {
  d: path("M8 2.5h8L17.5 5v14.5a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2V5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="n4qp-uoia"/><path class="g035zccsu"/></g>`,
		"fallback": "uix-sharp:energy-drink",
	});
}

export default Component;
