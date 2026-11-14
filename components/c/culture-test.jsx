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
		"content": `<style>.x4ayz9bsf {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M4.752 4.752Q1.75 7.754 1.75 12t3.002 7.248T12 22.25t7.248-3.002T22.25 12t-3.002-7.248T12 1.75T4.752 4.752M14.75 7.25q1.75 0 1.75 1.75t-1.75 1.75T13 9t1.75-1.75M8 10.5q0-2 2-2t2 2t-2 2t-2-2m3 4.25q0-2.5 2.5-2.5t2.5 2.5t-2.5 2.5t-2.5-2.5");
}
</style><path class="x4ayz9bsf"/>`,
		"fallback": "uix-solid:culture-test",
	});
}

export default Component;
