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
		"content": `<style>.m7i1izl8c {
  fill: currentColor;
  d: path("M5 2h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3m14 18a1 1 0 0 0 1-1V7a1 1 0 0 1 2 0v12a3 3 0 0 1-3 3H7a1 1 0 0 1 0-2Z");
}
</style><path class="m7i1izl8c"/>`,
		"fallback": "coolicons:drop-shadow-fill",
	});
}

export default Component;
