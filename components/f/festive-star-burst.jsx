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
		"content": `<style>.fq-to8sez {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 5.5l1.616 3.775l4.09.371l-3.091 2.704l.912 4.004L12 14.25l-3.527 2.104l.912-4.004l-3.091-2.704l4.09-.371Zm4.25.25l1.25-2m1.25 10l2.25.75m-9 4V21m-6.75-7.25L3 14.5m4.75-8.75l-1.25-2");
}
</style><path class="fq-to8sez"/>`,
		"fallback": "uix-sharp:festive-star-burst",
	});
}

export default Component;
