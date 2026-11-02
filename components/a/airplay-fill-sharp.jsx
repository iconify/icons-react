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
		"content": `<style>.yegzfg60n {
  fill: currentColor;
  d: path("M6 16H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1h-3a1 1 0 0 1 0-2h2V5H4v9h2a1 1 0 0 1 0 2m11 5H7a1.002 1.002 0 0 1-.707-1.707l5-5a1 1 0 0 1 1.414 0l5 5A1 1 0 0 1 17 21m-7.586-2h5.172L12 16.414Z");
}
</style><path class="yegzfg60n"/>`,
		"fallback": "coolicons:airplay-fill-sharp",
	});
}

export default Component;
