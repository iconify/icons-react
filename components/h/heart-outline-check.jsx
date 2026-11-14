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
		"content": `<style>.jo34ko0tj {
  d: path("m8.5 12l2.5 2.5l4.5-4.5");
}

.myc35iv5s {
  d: path("M12 20.5c-5-3.5-9.5-7-9.5-11.75A5 5 0 0 1 12 6.5a5 5 0 0 1 9.5 2.25C21.5 13.5 17 17 12 20.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="myc35iv5s"/><path class="jo34ko0tj"/></g>`,
		"fallback": "uix-sharp:heart-outline-check",
	});
}

export default Component;
