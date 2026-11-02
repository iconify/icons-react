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
		"content": `<style>.ef6mznbcp {
  fill: currentColor;
  d: path("M4 19V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-1v3a1 1 0 0 1-1 1H7a3 3 0 0 1-3-3m3-1a1 1 0 0 0 0 2h9v-2Z");
}
</style><path class="ef6mznbcp"/>`,
		"fallback": "coolicons:book-fill-sharp",
	});
}

export default Component;
