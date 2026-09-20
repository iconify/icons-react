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
		"content": `<style>.bw9t62bxf {
  fill: currentColor;
  d: path("M5 2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm12.5 5a.5.5 0 0 1 .5.5v2a2.5 2.5 0 0 1-2.5 2.5h-1.793l1.147 1.146a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708l2-2a.5.5 0 0 1 .708.708L13.707 11H15.5A1.5 1.5 0 0 0 17 9.5v-2a.5.5 0 0 1 .5-.5m-5.621 3H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1.085a1.5 1.5 0 0 1-1.56-.354l-2-2a1.5 1.5 0 0 1 0-2.122zM6.5 14a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H7a.5.5 0 0 1-.5-.5");
}
</style><path class="bw9t62bxf"/>`,
		"fallback": "fluent:convert-range-20-filled",
	});
}

export default Component;
