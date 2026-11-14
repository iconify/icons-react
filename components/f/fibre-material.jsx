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
		"content": `<style>.w4crttbaj {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M17.75 1.75H6.25q-2.5 0-2.5 2.5t2.5 2.5h.5v10.5h-.5q-2.5 0-2.5 2.5q0 1.036.732 1.768t1.768.732h11.5q1.036 0 1.768-.732t.732-1.768q0-2.5-2.5-2.5h-.5V6.75h.5q1.036 0 1.768-.732t.732-1.768q0-2.5-2.5-2.5m-9.5 10.791l7.5-2.5v7.209h-7.5zm7.5-4.082l-7.5 2.5V6.75h7.5z");
}
</style><path class="w4crttbaj"/>`,
		"fallback": "uix-solid:fibre-material",
	});
}

export default Component;
