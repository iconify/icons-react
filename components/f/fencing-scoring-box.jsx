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
		"content": `<style>.vmeuejb7j {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M17.5 7.25h-.75V6.5q0-1.968-1.391-3.359T12 1.75T8.641 3.141T7.25 6.5v.75H6.5q-1.76 0-3.005 1.245T2.25 11.5v5q0 1.76 1.245 3.005T6.5 20.75h11q1.76 0 3.005-1.245T21.75 16.5v-5q0-1.76-1.245-3.005T17.5 7.25M8.75 6.5v.75h6.5V6.5q0-3.25-3.25-3.25T8.75 6.5m-.25 5q2.5 0 2.5 2.5t-2.5 2.5T6 14t2.5-2.5M13 14q0-2.5 2.5-2.5T18 14t-2.5 2.5T13 14");
}
</style><path class="vmeuejb7j"/>`,
		"fallback": "uix-solid:fencing-scoring-box",
	});
}

export default Component;
