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
		"content": `<style>.g73h1bchf {
  d: path("M12.9 21.5H2.5v-19h19v11.4M2.5 11h14m3 0h2M11 11v3.4m0 2.6v4.5");
}

.pfxpnzbtv {
  d: path("m6 8l3-2.25l3.5 1.5L18 5.5m0 8.75l1.029 2.084l2.3.334l-1.665 1.623l.393 2.291L18 19.5l-2.057 1.082l.393-2.291l-1.665-1.623l2.3-.334Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="g73h1bchf"/><path class="pfxpnzbtv"/></g>`,
		"fallback": "uix-sharp:dashboard-star",
	});
}

export default Component;
