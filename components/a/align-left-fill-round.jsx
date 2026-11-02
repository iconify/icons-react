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
		"content": `<style>.h_appmbcd {
  fill: currentColor;
  d: path("M5 21a1 1 0 0 1-2 0V3a1 1 0 0 1 2 0Zm6-18h6a4 4 0 0 1 0 8h-6a4 4 0 0 1 0-8m0 10h2a4 4 0 0 1 0 8h-2a4 4 0 0 1 0-8");
}
</style><path class="h_appmbcd"/>`,
		"fallback": "coolicons:align-left-fill-round",
	});
}

export default Component;
