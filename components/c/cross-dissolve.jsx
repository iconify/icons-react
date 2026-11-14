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
		"content": `<style>.zr29evbeq {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M6 3.25h5.5q1.76 0 3.005 1.245T15.75 7.5v1.75H18q1.76 0 3.005 1.245T22.25 13.5v3q0 1.76-1.245 3.005T18 20.75h-5.5q-1.76 0-3.005-1.245T8.25 16.5v-1.75H6q-1.76 0-3.005-1.245T1.75 10.5v-3q0-1.76 1.245-3.005T6 3.25m4.5 6q-2.25 0-2.25 2.25v1q0 .932.659 1.591t1.591.659h3q.932 0 1.591-.659t.659-1.591v-1q0-2.25-2.25-2.25z");
}
</style><path class="zr29evbeq"/>`,
		"fallback": "uix-solid:cross-dissolve",
	});
}

export default Component;
