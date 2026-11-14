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
		"content": `<style>.i_jo6mb3j {
  d: path("M2.5 12a7.5 7.5 0 1 0 15 0a7.5 7.5 0 1 0-15 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uxmn98c2c {
  d: path("M8.25 12a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0ZM2.5 12h5.75m3.5 0h5.75M10 13.75v5.75M19 3v4m-2-2h4");
}
</style><g class="ulnmmdpxh"><path class="i_jo6mb3j"/><path class="uxmn98c2c"/></g>`,
		"fallback": "uix-sharp:car-driver-add",
	});
}

export default Component;
