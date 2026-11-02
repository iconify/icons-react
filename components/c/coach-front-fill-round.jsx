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
		"content": `<style>.ciiquxbip {
  fill: currentColor;
  d: path("M8 2h8a5 5 0 0 1 5 5v9c0 1.27-.803 2.405-2 2.829V20a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-1H9v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-1.171A3 3 0 0 1 3 16V7a5 5 0 0 1 5-5m8 2H8a3 3 0 0 0-3 3v4h14V7a3 3 0 0 0-3-3M8.01 14H8a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2m8 0H16a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2");
}
</style><path class="ciiquxbip"/>`,
		"fallback": "coolicons:coach-front-fill-round",
	});
}

export default Component;
