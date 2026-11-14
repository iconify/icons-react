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
		"content": `<style>.rxru8ob0j {
  d: path("M5 17a5 5 0 0 1 10 0m2.5-14v11.5m0-11.5L21 5.25L17.5 7.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ygv10l0di {
  d: path("M2.5 17a9 3.5 0 1 0 18 0a9 3.5 0 1 0-18 0Z");
}
</style><g class="ulnmmdpxh"><path class="ygv10l0di"/><path class="rxru8ob0j"/></g>`,
		"fallback": "uix-sharp:hole-in-one",
	});
}

export default Component;
