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
		"content": `<style>.zxr7riqlp {
  fill: currentColor;
  d: path("M4 19V7a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v8a3.01 3.01 0 0 1-2.072 2.854A5.01 5.01 0 0 1 13 22H7a3 3 0 0 1-3-3m3-1a1 1 0 0 0 0 2h6a3 3 0 0 0 2.83-2Z");
}
</style><path class="zxr7riqlp"/>`,
		"fallback": "coolicons:book-fill-round",
	});
}

export default Component;
