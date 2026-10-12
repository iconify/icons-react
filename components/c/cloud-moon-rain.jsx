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
		"content": `<style>.q82wydbfu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.96 16.64a3.36 3.36 0 0 1-.46-6.69a4.83 4.83 0 0 1 8.95-1.16a3.78 3.78 0 0 1-.51 7.85ZM3.4 10.71a5 5 0 0 1 3.74-7.42M6.79 7a4 4 0 0 1 .37-3.71M10 18.75l-.75 2.5m4.25-2.5l-.75 2.5m4.25-2.5l-.75 2.5");
}
</style><path class="q82wydbfu"/>`,
		"fallback": "iconoven:cloud-moon-rain",
	});
}

export default Component;
