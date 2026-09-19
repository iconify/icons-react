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
		"content": `<style>.d5f74acqz {
  fill: currentColor;
  d: path("M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2a2 2 0 0 0 2-2V5c0-1.11-.89-2-2-2m0 5h-2V5h2zM4 19h16v2H4z");
}
</style><path class="d5f74acqz"/>`,
		"fallback": "ic:baseline-local-cafe",
	});
}

export default Component;
