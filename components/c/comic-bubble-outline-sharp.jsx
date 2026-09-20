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
		"content": `<style>.b0mfs5v3o {
  fill: currentColor;
  d: path("M11 3.925L8.925 6H6v2.925L3.925 11L6 13.075V16h2.925L11 18.075l2.5-2.5l4.2 2.125l-2.15-4.175L18.075 11L16 8.925V6h-2.925zM11 1.1L13.9 4H18v4.1l2.9 2.9l-2.9 2.9l2.875 5.65l-1.325 1.325L13.9 18L11 20.9L8.1 18H4v-4.1L1.1 11L4 8.1V4h4.1zm0 9.9");
}
</style><path class="b0mfs5v3o"/>`,
		"fallback": "material-symbols:comic-bubble-outline-sharp",
	});
}

export default Component;
