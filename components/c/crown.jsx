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
		"content": `<style>.ztllc1aon {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4.31 7.75l3.13 2.75q.56.5.99-.12l3.14-4.51q.43-.62.86 0l3.14 4.51q.43.62.99.12l3.13-2.75q.56-.5.45.24l-1.28 8.52q-.11.74-.86.74H6q-.75 0-.86-.74L3.86 7.99q-.11-.74.45-.24m1.44 12.5h12.5");
}
</style><path class="ztllc1aon"/>`,
		"fallback": "iconoven:crown",
	});
}

export default Component;
