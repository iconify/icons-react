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
		"content": `<style>.i3rzc9w8m {
  fill: currentColor;
  d: path("M4 19V5a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v10c0 1.27-.803 2.405-2 2.829V19a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3m3-1a1 1 0 0 0 0 2h8a1 1 0 0 0 1-1v-1Z");
}
</style><path class="i3rzc9w8m"/>`,
		"fallback": "coolicons:book-fill",
	});
}

export default Component;
