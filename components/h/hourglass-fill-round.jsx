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
		"content": `<style>.wfd52pbot {
  fill: currentColor;
  d: path("M5 2h14a1 1 0 0 1 0 2h-1v1c0 1.317-.335 2.748-1.293 3.707L13.414 12l3.293 3.293C17.665 16.252 18 17.683 18 19v1h1a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2h1v-1c0-1.317.335-2.748 1.293-3.707L10.586 12L7.293 8.707C6.335 7.748 6 6.317 6 5V4H5a1 1 0 0 1 0-2");
}
</style><path class="wfd52pbot"/>`,
		"fallback": "coolicons:hourglass-fill-round",
	});
}

export default Component;
