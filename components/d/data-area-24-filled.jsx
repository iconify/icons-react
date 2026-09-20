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
		"content": `<style>.uwr0scbas {
  fill: currentColor;
  d: path("M4 3a1 1 0 0 1 1 1v13.5A1.5 1.5 0 0 0 6.5 19H20a1 1 0 1 1 0 2H6.5A3.5 3.5 0 0 1 3 17.5V4a1 1 0 0 1 1-1m15.5 3.75V18h-13a.5.5 0 0 1-.5-.5V9.161L8.165 8.08a.75.75 0 0 1 .715.025l3.82 2.246l5.6-4.2a.75.75 0 0 1 1.2.6");
}
</style><path class="uwr0scbas"/>`,
		"fallback": "fluent:data-area-24-filled",
	});
}

export default Component;
