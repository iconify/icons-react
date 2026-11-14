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
		"content": `<style>.ah455xb-q {
  d: path("M2.5 16H8c4 0 7.5-3 7.5-7a3.5 3.5 0 0 0-7 0");
}

.dm25trbqk {
  d: path("m18 13.5l2.5 2.5l-2.5 2.5");
}

.ej4wbybdu {
  d: path("M8.5 9c0 4 3.5 7 7.5 7h4.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ah455xb-q"/><path class="ej4wbybdu"/><path class="dm25trbqk"/></g>`,
		"fallback": "uix-sharp:barrel-roll",
	});
}

export default Component;
