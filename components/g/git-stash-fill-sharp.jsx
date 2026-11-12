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
		"content": `<style>.w4tcujbcb {
  fill: currentColor;
  d: path("M13 8.829v3.757l1.293-1.293a.999.999 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a.999.999 0 1 1 1.414-1.414L11 12.586V8.829a3 3 0 1 1 2 0M2 14a1 1 0 0 1 2 0v6h16v-6a1 1 0 0 1 2 0v7a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1Z");
}
</style><path class="w4tcujbcb"/>`,
		"fallback": "coolicons:git-stash-fill-sharp",
	});
}

export default Component;
