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
		"content": `<style>.x9azt6bnx {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M18.75 4.75v.5q0 1.036-.732 1.768t-1.768.732h-8.5q-2.5 0-2.5-2.5v-.5q0-2.5 2.5-2.5h8.5q1.036 0 1.768.732t.732 1.768m2.5 7.5v-.5q0-2.5-2.5-2.5H5.25q-1.036 0-1.768.732T2.75 11.75v.5q0 2.5 2.5 2.5h13.5q2.5 0 2.5-2.5m-4.5 6.5v.5q0 1.036-.732 1.768t-1.768.732h-4.5q-1.036 0-1.768-.732T7.25 19.25v-.5q0-2.5 2.5-2.5h4.5q2.5 0 2.5 2.5");
}
</style><path class="x9azt6bnx"/>`,
		"fallback": "uix-solid:distribute-spacing-vertical",
	});
}

export default Component;
