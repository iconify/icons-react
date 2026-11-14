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
		"content": `<style>.f89ajgbeg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M16.209 10.884L11.5 13.5l-9-5l9-5l9 5l-1.843 1.024M6.5 11v4.5c0 1.5 2.5 2.5 5 2.5q.27 0 .538-.015M20.5 8.5V13m-2.75 1l1.029 2.084l2.3.334l-1.665 1.623l.393 2.291l-2.057-1.082l-2.057 1.082l.393-2.291l-1.665-1.623l2.3-.334Z");
}
</style><path class="f89ajgbeg"/>`,
		"fallback": "uix-sharp:cpd-points",
	});
}

export default Component;
