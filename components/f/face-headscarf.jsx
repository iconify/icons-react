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
		"content": `<style>.nkxglcbmg {
  d: path("M7.75 12a4.25 5 0 1 0 8.5 0a4.25 5 0 1 0-8.5 0ZM5 18c3 2.5 11 2.5 14 0m-8.5-6.5h.01m2.99 0h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z7k4q_bvl {
  d: path("M4.5 21.5C5 18.5 5 15 5 11a7 7 0 0 1 14 0c0 4 0 7.5.5 10.5");
}
</style><g class="ulnmmdpxh"><path class="z7k4q_bvl"/><path class="nkxglcbmg"/></g>`,
		"fallback": "uix-sharp:face-headscarf",
	});
}

export default Component;
