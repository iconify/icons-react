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
		"content": `<style>.pj04a46rp {
  fill: currentColor;
  d: path("M5 3a1 1 0 0 1 2 0v1h2V3a1 1 0 0 1 2 0v1h2V3a1 1 0 0 1 2 0v1h2V3a1 1 0 0 1 2 0v7h2a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-5v-4a4 4 0 0 0-8 0v4H3a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h2Z");
}
</style><path class="pj04a46rp"/>`,
		"fallback": "coolicons:castle-fill-sharp",
	});
}

export default Component;
