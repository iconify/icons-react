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
		"content": `<style>.y_wz_7b4d {
  fill: currentColor;
  d: path("M4 20v-1h16v1zm1.327-4.923L2.231 9.904l1.458-.381l2.665 2.273l4.135-1.079l-4.926-6.611l1.862-.487l7.11 6.025l4.269-1.13q.569-.148 1.09.158q.52.307.668.876t-.12 1.09t-.838.668z");
}
</style><path class="y_wz_7b4d"/>`,
		"fallback": "material-symbols-light:flight-takeoff-sharp",
	});
}

export default Component;
