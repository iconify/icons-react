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
		"content": `<style>.khxvphr6i {
  d: path("M3 13.5h18V18H3ZM6 18v3m12-3v3");
}

.ny7dtrxmy {
  d: path("M4 16v-6c0-1.5 1-2 2.5-2h11c1.5 0 2.5.5 2.5 2v6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ny7dtrxmy"/><path class="khxvphr6i"/></g>`,
		"fallback": "uix-sharp:airport-lounge",
	});
}

export default Component;
