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
		"content": `<style>.es4du_bag {
  d: path("M3 3h18v11H3Zm9 11v7.5m-5.5-13h10.25");
}

.hs0n8kbwk {
  d: path("m14 5.75l2.75 2.75L14 11.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="es4du_bag"/><path class="hs0n8kbwk"/></g>`,
		"fallback": "uix-sharp:entrance-sign",
	});
}

export default Component;
