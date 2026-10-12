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
		"content": `<style>.zmsi6jd9h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 12a7 7 0 0 1 14 0M2.75 12h18.5l-1.4 6.6l-.596 2.637l-2.704.013h-9.1l-2.704-.013L4.15 18.6Zm5 4.5h8.5");
}
</style><path class="zmsi6jd9h"/>`,
		"fallback": "iconoven:child-car-seat-sharp",
	});
}

export default Component;
