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
		"content": `<style>.e0uxti_oh {
  fill: currentColor;
  d: path("M20 3h-8c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 8h-8V7h8zM4 12H2v7c0 1.1.9 2 2 2h9v-2H4z");
}

.fd0mx7e0g {
  fill: currentColor;
  d: path("M8 8H6v7c0 1.1.9 2 2 2h9v-2H8z");
}
</style><path class="fd0mx7e0g"/><path class="e0uxti_oh"/>`,
		"fallback": "ic:baseline-dynamic-feed",
	});
}

export default Component;
