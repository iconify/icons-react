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
		"content": `<style>.fvcx0sbfc {
  fill: currentColor;
  d: path("M18 2.98a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h.804a3.5 3.5 0 1 0 1.696 3a.5.5 0 0 1 1 0a4.5 4.5 0 1 1-2-3.742V.98a.5.5 0 0 1 .5-.5a.5.5 0 0 1 .5.5zM9.024 6A5.5 5.5 0 0 0 16 10.773V15a1 1 0 0 1-1 1H5a1 1 0 0 0 1 1h9.5a.5.5 0 0 1 0 1H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4.241a5.5 5.5 0 0 0-1.04 2h.006a5.5 5.5 0 0 0-.185 2z");
}
</style><path class="fvcx0sbfc"/>`,
		"fallback": "fluent:book-arrow-clockwise-20-filled",
	});
}

export default Component;
