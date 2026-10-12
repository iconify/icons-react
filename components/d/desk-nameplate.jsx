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
		"content": `<style>.f2ibiyb9y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.75 7.75h12.5q1.25 0 1.43 1.24l1.39 9.52q.18 1.24-1.07 1.24H4q-1.25 0-1.07-1.24l1.39-9.52q.18-1.24 1.43-1.24M7.5 12.5h9m-7 3.25h5");
}
</style><path class="f2ibiyb9y"/>`,
		"fallback": "iconoven:desk-nameplate",
	});
}

export default Component;
