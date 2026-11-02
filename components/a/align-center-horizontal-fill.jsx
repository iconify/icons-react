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
		"content": `<style>.irguk2bwy {
  fill: currentColor;
  d: path("M13 3v18a1 1 0 0 1-2 0V3a1 1 0 0 1 2 0M9 3v8H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3Zm6 8V3h3a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3ZM9 21H8a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3h1Zm6 0v-8h1a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3Z");
}
</style><path class="irguk2bwy"/>`,
		"fallback": "coolicons:align-center-horizontal-fill",
	});
}

export default Component;
