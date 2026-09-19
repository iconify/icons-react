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
		"content": `<style>.mbhxoib1y {
  fill: currentColor;
  d: path("M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-8.5 12.5h-4v-4h4zm0-5h-4v-4h4zm5 5h-4v-4h4zm0-5h-4v-4h4z");
}
</style><path class="mbhxoib1y"/>`,
		"fallback": "ic:baseline-view-compact-alt",
	});
}

export default Component;
