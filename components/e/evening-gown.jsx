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
		"content": `<style>.jj5ni4mvb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 6.5q3 1.5 6 0l-.5 5l5 8.5q-7.5 2.5-15 0l5-8.5Zm.25-4L9 6.5m5.75-4l.25 4m-5.5 5h5");
}
</style><path class="jj5ni4mvb"/>`,
		"fallback": "uix:evening-gown",
	});
}

export default Component;
