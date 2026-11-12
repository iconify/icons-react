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
		"content": `<style>.i6xh4h9fv {
  fill: currentColor;
  d: path("M2 7a5 5 0 0 1 5-5h10a5 5 0 0 1 5 5v10a1 1 0 0 1-2 0v-6h-2v8a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3v-8H4v6a1 1 0 0 1-2 0Zm18 2V7a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v2Zm-3-4a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2ZM9 16a3 3 0 1 0 6 0a3 3 0 0 0-6 0");
}
</style><path class="i6xh4h9fv"/>`,
		"fallback": "coolicons:atm-fill-round",
	});
}

export default Component;
