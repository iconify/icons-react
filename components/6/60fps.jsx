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
		"content": `<style>.ok1l_ybkr {
  fill: currentColor;
  d: path("M8 19H5q-1.25 0-2.125-.875T2 16V8q0-1.25.875-2.125T5 5h5v3H5v2h3q1.25 0 2.125.875T11 13v3q0 1.25-.875 2.125T8 19m-3-6v3h3v-3zm10 3h4V8h-4zm0 3q-1.25 0-2.125-.875T12 16V8q0-1.25.875-2.125T15 5h4q1.25 0 2.125.875T22 8v8q0 1.25-.875 2.125T19 19z");
}
</style><path class="ok1l_ybkr"/>`,
		"fallback": "material-symbols:60fps",
	});
}

export default Component;
