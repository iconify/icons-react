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
		"content": `<style>.gw3ttbnuj {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M6 3.25h12q1.76 0 3.005 1.245T22.25 7.5v9q0 1.76-1.245 3.005T18 20.75H6q-1.76 0-3.005-1.245T1.75 16.5v-9q0-1.76 1.245-3.005T6 3.25m3.5 3H7q-2.25 0-2.25 2.25V10q0 2.25 2.25 2.25h2.5q2.25 0 2.25-2.25V8.5q0-2.25-2.25-2.25m5.75 0Q13 6.25 13 8.5v3q0 2.25 2.25 2.25h2q2.25 0 2.25-2.25v-3q0-2.25-2.25-2.25zm-3.5 9.5q0-2.25-2.25-2.25H7q-2.25 0-2.25 2.25T7 18h2.5q2.25 0 2.25-2.25");
}
</style><path class="gw3ttbnuj"/>`,
		"fallback": "uix-solid:concept-board",
	});
}

export default Component;
