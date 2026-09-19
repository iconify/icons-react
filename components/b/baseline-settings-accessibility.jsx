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
		"content": `<style>.mdycqopwz {
  fill: currentColor;
  d: path("M20.5 4c-2.61.7-5.67 1-8.5 1s-5.89-.3-8.5-1L3 6c1.86.5 4 .83 6 1v12h2v-6h2v6h2V7c2-.17 4.14-.5 6-1zM12 4c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2M7 24h2v-2H7zm4 0h2v-2h-2zm4 0h2v-2h-2z");
}
</style><path class="mdycqopwz"/>`,
		"fallback": "ic:baseline-settings-accessibility",
	});
}

export default Component;
