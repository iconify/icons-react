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
		"content": `<style>.x1f8j-6kp {
  fill: currentColor;
  d: path("M7.92 16a3.24 3.24 0 0 0-1.42 2.65v.6a.25.25 0 0 0 .25.25h10.5a.25.25 0 0 0 .25-.25v-.6A3.24 3.24 0 0 0 16.08 16z");
}
</style><path class="x1f8j-6kp"/>`,
		"fallback": "fluent:hourglass-one-quarter-24-filled",
	});
}

export default Component;
