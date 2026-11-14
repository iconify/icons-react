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
		"content": `<style>.fd94a5bpq {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M6.5 2.25h11q1.76 0 3.005 1.245T21.75 6.5v4q0 1.76-1.245 3.005T17.5 14.75h-1.45q.2.459.2 1v4q0 1.036-.732 1.768t-1.768.732h-3.5q-1.036 0-1.768-.732T7.75 19.75v-4q0-.564.127-1H6.5q-1.76 0-3.005-1.245T2.25 10.5v-4q0-1.76 1.245-3.005T6.5 2.25m1.5 3q-2.25 0-2.25 2.25v2q0 2.25 2.25 2.25h8q2.25 0 2.25-2.25v-2q0-2.25-2.25-2.25z");
}
</style><path class="fd94a5bpq"/>`,
		"fallback": "uix-solid:flash-gel",
	});
}

export default Component;
