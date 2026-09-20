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
		"content": `<style>.y15n-tbmo {
  fill: currentColor;
  d: path("m16 16.707l1.146 1.147a.5.5 0 0 0 .708-.708l-15-15a.5.5 0 1 0-.708.708L4 4.707V17.5a.5.5 0 0 0 .794.404L10 14.118l5.206 3.786A.5.5 0 0 0 16 17.5zM16 4.5v9.379L4.794 2.673A2.5 2.5 0 0 1 6.5 2h7A2.5 2.5 0 0 1 16 4.5");
}
</style><path class="y15n-tbmo"/>`,
		"fallback": "fluent:bookmark-off-20-filled",
	});
}

export default Component;
