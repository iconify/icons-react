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
		"content": `<style>.k_tqu9wtb {
  fill: currentColor;
  d: path("M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-8.75 12.75h-4v-4h4zm0-5.5h-4v-4h4zm5.5 5.5h-4v-4h4zm0-5.5h-4v-4h4z");
}
</style><path class="k_tqu9wtb"/>`,
		"fallback": "ic:baseline-view-cozy",
	});
}

export default Component;
