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
		"content": `<style>.dw08_xb_f {
  d: path("M15.5 5.5L17 7l1.5-1.5M5 13.5h14M5 18h10");
}

.q9oi50xuy {
  d: path("M2.5 3h19v6.5h-19Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="q9oi50xuy"/><path class="dw08_xb_f"/></g>`,
		"fallback": "uix-sharp:dropdown-menu",
	});
}

export default Component;
