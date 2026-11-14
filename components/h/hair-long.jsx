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
		"content": `<style>.t_w3nfbjx {
  d: path("M15.5 21.5V18h1.75c1 0 1.75-.75 1.75-1.75v-2h.5c.5 0 1-.5.75-1l-1.25-3C19 6.5 16 3 11.5 3c-5 0-8 3.5-8 8.5v10");
}

.u1-qexbvp {
  d: path("M10 21.5V17c-1.5-1.5-2-3.5-2-5.5c0-2.5 2-4.5 5-5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="t_w3nfbjx"/><path class="u1-qexbvp"/></g>`,
		"fallback": "uix-sharp:hair-long",
	});
}

export default Component;
