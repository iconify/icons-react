import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.uhi3ryb8j {
  fill: currentColor;
  d: path("M8.5 2a1.5 1.5 0 0 0-1.415 1H5.5A1.5 1.5 0 0 0 4 4.5v3.756a4.5 4.5 0 0 1 5.561 6.184l2 2a1.5 1.5 0 0 1 .354 1.56H14.5a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 14.5 3h-1.585A1.5 1.5 0 0 0 11.5 2zm3 1a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1zM8.303 14.596a3.5 3.5 0 1 0-.707.707l2.55 2.55a.5.5 0 0 0 .708-.707zM5.5 15a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5");
}
</style><path class="uhi3ryb8j"/>`,
		"fallback": "fluent:clipboard-search-20-filled",
	});
}

export default Component;
