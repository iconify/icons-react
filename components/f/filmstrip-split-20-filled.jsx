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
		"content": `<style>.cnuvrotsp {
  fill: currentColor;
  d: path("M10.5 2.5a.5.5 0 0 0-1 0v15a.5.5 0 0 0 1 0zM2 7a3 3 0 0 1 3-3h3.5v12H5a3 3 0 0 1-3-3zm2.5-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5M4 13.5a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-1 0zM4.5 9a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5m7 7V4H15a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3zM15 7.5a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-1 0zm.5 4.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5M15 9.5v1a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-1 0");
}
</style><path class="cnuvrotsp"/>`,
		"fallback": "fluent:filmstrip-split-20-filled",
	});
}

export default Component;
