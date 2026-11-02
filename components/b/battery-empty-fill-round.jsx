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
		"content": `<style>.ubv0g8btz {
  fill: currentColor;
  d: path("M2 10a4 4 0 0 1 4-4h9a4 4 0 0 1 4 4v4a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4Zm20 4a1 1 0 0 1-2 0v-4a1 1 0 0 1 2 0Z");
}
</style><path class="ubv0g8btz"/>`,
		"fallback": "coolicons:battery-empty-fill-round",
	});
}

export default Component;
