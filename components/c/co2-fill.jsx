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
		"content": `<style>.kxkrek6kf {
  fill: currentColor;
  d: path("M4 7v6h2a1 1 0 0 1 0 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2a1 1 0 0 1 0 2Zm7 8a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2Zm1-8h-1v6h2V7Zm8 4a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1v1h2a1 1 0 0 1 0 2h-2a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2h1v-1h-2a1 1 0 0 1 0-2Z");
}
</style><path class="kxkrek6kf"/>`,
		"fallback": "coolicons:co2-fill",
	});
}

export default Component;
