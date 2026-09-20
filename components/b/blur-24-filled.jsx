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
		"content": `<style>.qxelstbpb {
  fill: currentColor;
  d: path("M3 12a9 9 0 0 1 13.977-7.5H12v1h6.225a9 9 0 0 1 1.26 1.5H12v1h8.064q.358.717.584 1.5H12v1h8.876q.123.733.124 1.5h-9v1h8.945a9 9 0 0 1-.297 1.5H12v1h8.294a9 9 0 0 1-.81 1.5H12v1h6.708A9 9 0 0 1 3 12");
}
</style><path class="qxelstbpb"/>`,
		"fallback": "fluent:blur-24-filled",
	});
}

export default Component;
