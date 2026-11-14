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
		"content": `<style>.dcx14lb1o {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M8.386 2.25h7.228q1.979 0 2.433 1.927l3.177 13.5q.277 1.177-.474 2.125t-1.96.948H5.21q-1.209 0-1.96-.948t-.474-2.125l3.177-13.5Q6.407 2.25 8.386 2.25m3.114 10.5q-2.5 0-2.5 2.5t2.5 2.5h1q1.036 0 1.768-.732T15 15.25t-.732-1.768t-1.768-.732z");
}
</style><path class="dcx14lb1o"/>`,
		"fallback": "uix-solid:cornhole",
	});
}

export default Component;
