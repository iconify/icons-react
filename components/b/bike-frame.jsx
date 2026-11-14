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
		"content": `<style>.tfzes5u-q {
  d: path("M9 8.5h8l.75 3l-6.75 6m6.75-6l3.25 6m-12-9l-.5-3m-2 0h4m6.5 3l-.5-3h3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.utn92pbbn {
  d: path("M3 17.5h8l-2-9Z");
}
</style><g class="ulnmmdpxh"><path class="utn92pbbn"/><path class="tfzes5u-q"/></g>`,
		"fallback": "uix-sharp:bike-frame",
	});
}

export default Component;
