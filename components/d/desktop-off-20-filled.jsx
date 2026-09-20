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
		"content": `<style>.e_m13ccwj {
  fill: currentColor;
  d: path("m14.293 15l2.853 2.854a.5.5 0 0 0 .708-.708l-15-15a.5.5 0 0 0-.708.707A1.5 1.5 0 0 0 2 3.5v10A1.5 1.5 0 0 0 3.5 15H7v2H5.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1H13v-2zM18 13.5a1.5 1.5 0 0 1-.974 1.405L4.121 2H16.5A1.5 1.5 0 0 1 18 3.5zM12 15v2H8v-2z");
}
</style><path class="e_m13ccwj"/>`,
		"fallback": "fluent:desktop-off-20-filled",
	});
}

export default Component;
