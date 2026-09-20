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
		"content": `<style>.wkc7xt41c {
  fill: currentColor;
  d: path("M2 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h5.5v-3.5h1V15H16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-5.5v3.5h-1V5zm2.854 3.354a.5.5 0 1 0-.708-.708l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L5.707 10.5h8.586l-1.147 1.146a.5.5 0 0 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2a.5.5 0 0 0-.708.708L14.293 9.5H5.707z");
}
</style><path class="wkc7xt41c"/>`,
		"fallback": "fluent:dual-screen-span-20-regular",
	});
}

export default Component;
