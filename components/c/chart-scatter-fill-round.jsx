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
		"content": `<style>.xrk_2ibne {
  fill: currentColor;
  d: path("M4 16a3 3 0 0 0 3 3h14a1 1 0 0 1 0 2H7a5 5 0 0 1-5-5V4a1 1 0 0 1 2 0ZM15 6a2 2 0 1 1 3.999-.001A2 2 0 0 1 15 6m-4 5a2 2 0 1 1 3.999-.001A2 2 0 0 1 11 11m6 3a2 2 0 1 1 3.999-.001A2 2 0 0 1 17 14M6 15a2 2 0 1 1 3.999-.001A2 2 0 0 1 6 15");
}
</style><path class="xrk_2ibne"/>`,
		"fallback": "coolicons:chart-scatter-fill-round",
	});
}

export default Component;
