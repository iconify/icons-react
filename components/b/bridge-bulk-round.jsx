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
		"content": `<style>.lzngp1bih {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M7 5h10a5 5 0 0 1 5 5v6a3 3 0 0 1-3 3h-1a3 3 0 0 1-3-3v-2a3 3 0 1 0-6 0v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-6a5 5 0 0 1 5-5");
}
</style><path class="lzngp1bih"/>`,
		"fallback": "coolicons:bridge-bulk-round",
	});
}

export default Component;
