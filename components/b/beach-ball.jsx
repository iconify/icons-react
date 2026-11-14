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
		"content": `<style>.tv880yg6p {
  d: path("M5 9.75a7 7 0 1 0 14 0a7 7 0 1 0-14 0Z");
}

.u6rng2b-y {
  d: path("M12 2.75c-3.5 3-3.5 11 0 14m0-14c3.5 3 3.5 11 0 14m-9 4q2.25-1.5 4.5 0t4.5 0t4.5 0t4.5 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="tv880yg6p"/><path class="u6rng2b-y"/></g>`,
		"fallback": "uix-sharp:beach-ball",
	});
}

export default Component;
