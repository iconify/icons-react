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
		"content": `<style>.pko_rh_1b {
  d: path("M14.75 14.5a1.75 2.25 0 1 0 3.5 0a1.75 2.25 0 1 0-3.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xgb7fdcoy {
  d: path("M2.5 9h19v11h-19ZM4 9V7h16v2M5.5 7V5h13v2M8 5v15m3-15v15");
}
</style><g class="ulnmmdpxh"><path class="xgb7fdcoy"/><path class="pko_rh_1b"/></g>`,
		"fallback": "uix-sharp:deposit-lump-sum",
	});
}

export default Component;
