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
		"content": `<style>.mkp8kpbid {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M6.5 2.25h11q2.75 0 2.75 2.75q0 2.031-1.5 2.562V19q0 2.75-2.75 2.75H8q-2.75 0-2.75-2.75V7.562Q3.75 7.031 3.75 5q0-2.75 2.75-2.75m.25 5.5V19q0 1.25 1.25 1.25h8q1.25 0 1.25-1.25V7.75zm3.75 2h3q2.5 0 2.5 2.5v3.5q0 2.5-2.5 2.5h-3q-2.5 0-2.5-2.5v-3.5q0-2.5 2.5-2.5");
}
</style><path class="mkp8kpbid"/>`,
		"fallback": "uix-solid:coffee-canister",
	});
}

export default Component;
