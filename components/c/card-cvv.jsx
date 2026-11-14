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
		"content": `<style>.djkoa1b_x {
  d: path("M13 12.5h5.5V16H13Z");
}

.ubazlinms {
  d: path("M2.5 5h19v14h-19Zm0 4.5h19M6 15h3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ubazlinms"/><path class="djkoa1b_x"/></g>`,
		"fallback": "uix-sharp:card-cvv",
	});
}

export default Component;
