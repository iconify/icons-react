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
		"content": `<style>.bvl6rb0lu {
  d: path("M13.4 17H2.5V3.5h18v8.6m-9 4.9v3.5m-3.5 0h3.6");
}

.dvyxcjmkp {
  d: path("m6 14l3.5-4.5l3 3l2-2L16 12m-1 9l5.25-5.25m-4-.25h4.25v4.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="bvl6rb0lu"/><path class="dvyxcjmkp"/></g>`,
		"fallback": "uix-sharp:client-gallery",
	});
}

export default Component;
