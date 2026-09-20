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
		"content": `<style>.dx_9gpnlx {
  fill: currentColor;
  d: path("M15.488 3.713q1.637.712 2.862 1.937t1.938 2.863T21 12t-.712 3.488t-1.938 2.862t-2.863 1.938T12 21q-1.025 0-1.975-.225t-1.9-.65L9.65 18.6q.575.2 1.163.3T12 19q2.9 0 4.95-2.05T19 12t-2.05-4.95T12 5T7.05 7.05T5 12q0 .6.1 1.188t.3 1.162l-1.5 1.5q-.45-.9-.675-1.862T3 12q0-1.85.712-3.487T5.65 5.65t2.863-1.937T12 3t3.488.713M13 16v-3.6L4.4 21L3 19.6l8.6-8.6H8V9h7v7z");
}
</style><path class="dx_9gpnlx"/>`,
		"fallback": "material-symbols:bubble-outline-sharp",
	});
}

export default Component;
