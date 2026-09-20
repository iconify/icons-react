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
		"content": `<style>.ur5h0ccoi {
  fill: currentColor;
  d: path("M2 5a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m10 4a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1M7.707 19.707a1 1 0 0 1-1.414 0l-3-3a1 1 0 1 1 1.414-1.414L6 16.586V9a1 1 0 1 1 2 0v7.586l1.293-1.293a1 1 0 0 1 1.414 1.414z");
}
</style><path class="ur5h0ccoi"/>`,
		"fallback": "fluent:arrow-expand-all-24-filled",
	});
}

export default Component;
