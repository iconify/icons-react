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
		"content": `<style>.d7_te477f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.75 8.73a3 3 0 1 1 2.5 0v1.52h5.25a1.5 1.5 0 0 1 0 3h-3.25l1.35 5.85a1.5 1.5 0 0 1-2.92.68L12 16l-1.68 3.78a1.5 1.5 0 0 1-2.92-.68l1.35-5.85H5.5a1.5 1.5 0 0 1 0-3h5.25Z");
}
</style><path class="d7_te477f"/>`,
		"fallback": "iconoven:cookie-cutter",
	});
}

export default Component;
