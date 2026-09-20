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
		"content": `<style>.faoxljbye {
  fill: currentColor;
  d: path("m13.948 12.533l-2.327-2.352l4.083-4.077l-.821-.821l-5.34 5.34l-.708-.67l6.067-6.066l1.51 1.51l1.397-1.399l2.347 2.346zM6.462 20H4.135v-2.327l6.754-6.76l2.352 2.328z");
}
</style><path class="faoxljbye"/>`,
		"fallback": "material-symbols-light:ink-pen-sharp",
	});
}

export default Component;
