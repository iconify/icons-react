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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ny7dtrxmy {
  d: path("M4 16v-6c0-1.5 1-2 2.5-2h11c1.5 0 2.5.5 2.5 2v6");
}

.wyok5cbci {
  d: path("M5.25 13.5h13.5A2.25 2.25 0 0 1 21 15.75A2.25 2.25 0 0 1 18.75 18H5.25A2.25 2.25 0 0 1 3 15.75a2.25 2.25 0 0 1 2.25-2.25M6 18v3m12-3v3");
}
</style><g class="hntgybcog"><path class="ny7dtrxmy"/><path class="wyok5cbci"/></g>`,
		"fallback": "uix:airport-lounge",
	});
}

export default Component;
