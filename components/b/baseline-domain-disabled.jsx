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
		"content": `<style>.xurqvr9_h {
  fill: currentColor;
  d: path("M8 5h2v2h-.9L12 9.9V9h8v8.9l2 2V7H12V3H5.1L8 5.9zm8 6h2v2h-2zM1.3 1.8L.1 3.1L2 5v16h16l3 3l1.3-1.3zM6 19H4v-2h2zm0-4H4v-2h2zm0-4H4V9h2zm4 8H8v-2h2zm0-4H8v-2h2zm2 4v-2h2l2 2z");
}
</style><path class="xurqvr9_h"/>`,
		"fallback": "ic:baseline-domain-disabled",
	});
}

export default Component;
