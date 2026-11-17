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
		"content": `<style>.bvvd1zudm {
  fill: currentColor;
  d: path("M21 5a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-4a3 3 0 1 0-6 0v4a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z");
}
</style><path class="bvvd1zudm"/>`,
		"fallback": "coolicons:bridge-fill-sharp",
	});
}

export default Component;
