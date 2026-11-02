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
		"content": `<style>.iq7q9ac2w {
  fill: currentColor;
  d: path("M21 21a1 1 0 0 1-2 0V3a1 1 0 0 1 2 0ZM3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3Zm4 10a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3Z");
}
</style><path class="iq7q9ac2w"/>`,
		"fallback": "coolicons:align-right-fill",
	});
}

export default Component;
