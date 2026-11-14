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
		"content": `<style>.b2cthrbqz {
  d: path("M5 5c0 4.5 4.5 6 4.75 8.5L8 21.5h8l-1.75-8C14.5 11 19 9.5 19 5");
}

.cdo57gxfo {
  d: path("M5 5a7 2.5 0 1 0 14 0A7 2.5 0 1 0 5 5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="cdo57gxfo"/><path class="b2cthrbqz"/></g>`,
		"fallback": "uix-sharp:djembe-drum",
	});
}

export default Component;
