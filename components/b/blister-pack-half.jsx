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
		"content": `<style>.lcj_akbtc {
  d: path("M4.25 9.5V14a1.25 1.25 0 0 0 2.5 0V9.5m1.75 0V14a1.25 1.25 0 0 0 2.5 0V9.5m2-.5h2.5v6H13Zm4.25 0h2.5v6h-2.5Z");
}

.rea3x2bzc {
  d: path("M2.5 6.5h19v11h-19Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="rea3x2bzc"/><path class="lcj_akbtc"/></g>`,
		"fallback": "uix-sharp:blister-pack-half",
	});
}

export default Component;
