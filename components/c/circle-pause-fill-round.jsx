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
		"content": `<style>.qnq1vmbrv {
  fill: currentColor;
  d: path("M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m9 3V9a1 1 0 0 0-2 0v6a1 1 0 0 0 2 0m4 0V9a1 1 0 0 0-2 0v6a1 1 0 0 0 2 0");
}
</style><path class="qnq1vmbrv"/>`,
		"fallback": "coolicons:circle-pause-fill-round",
	});
}

export default Component;
