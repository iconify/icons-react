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
		"content": `<style>.ricnnkb6w {
  fill: currentColor;
  d: path("M2 17V7a1 1 0 0 1 1-1h15a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1m20-3a1 1 0 0 1-2 0v-4a1 1 0 0 1 2 0Z");
}
</style><path class="ricnnkb6w"/>`,
		"fallback": "coolicons:battery-empty-fill-sharp",
	});
}

export default Component;
