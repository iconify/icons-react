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
		"content": `<style>.pf9nalbbr {
  fill: currentColor;
  d: path("M5 3a1 1 0 0 1 2 0v1h2V3a1 1 0 0 1 2 0v1h2V3a1 1 0 0 1 2 0v1h2V3a1 1 0 0 1 2 0v7a3 3 0 0 1 3 3v4a5 5 0 0 1-1.464 3.536A5 5 0 0 1 17 22h-1v-4a4 4 0 0 0-8 0v4H7a5 5 0 0 1-5-5v-4a3 3 0 0 1 3-3Z");
}
</style><path class="pf9nalbbr"/>`,
		"fallback": "coolicons:castle-fill-round",
	});
}

export default Component;
