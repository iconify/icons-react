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
		"content": `<style>.bxjm91brf {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M14 10q-2 0-2 2t2 2t2-2t-2-2m3.5 2q0-2 2-2t2 2t-2 2t-2-2M4.25 10.25h4.5q1.75 0 1.75 1.75t-1.75 1.75h-4.5Q2.5 13.75 2.5 12t1.75-1.75");
}
</style><path class="bxjm91brf"/>`,
		"fallback": "uix-solid:carousel-dots",
	});
}

export default Component;
