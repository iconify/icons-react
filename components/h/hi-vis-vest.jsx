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
		"content": `<style>.rx4dpibjm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.75 2.75zq1.25 0 1.63 1.19l1.24 3.87q.38 1.19.76 0l1.24-3.87q.38-1.19 1.63-1.19t1.93 1.05l2.39 3.65q.68 1.05.68 2.3V20q0 1.25-1.25 1.25H5q-1.25 0-1.25-1.25V9.75q0-1.25.68-2.3L6.82 3.8q.68-1.05 1.93-1.05m-5 10.5h16.5m-16.5 4h16.5");
}
</style><path class="rx4dpibjm"/>`,
		"fallback": "iconoven:hi-vis-vest",
	});
}

export default Component;
