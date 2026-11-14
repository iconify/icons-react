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
		"content": `<style>.aq8k4hbgm {
  d: path("M3.5 3v17.5h8.4");
}

.es5wspb9j {
  d: path("M6.5 14L10 8.5l3 2.5l6-6.5M14.25 18a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0Zm2 0h3.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="aq8k4hbgm"/><path class="es5wspb9j"/></g>`,
		"fallback": "uix-sharp:chart-remove",
	});
}

export default Component;
