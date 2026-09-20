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
		"content": `<style>.ny_y61ikl {
  fill: currentColor;
  d: path("M18 4.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0M3.5 16.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0M5.75 4a.75.75 0 0 0-.309 1.433l9.064 4.1l-9.59 4.796a.75.75 0 1 0 .67 1.342l11-5.5a.75.75 0 0 0-.026-1.354L9.228 5.5h5.522a.75.75 0 0 0 0-1.5H5.751");
}
</style><path class="ny_y61ikl"/>`,
		"fallback": "fluent:gesture-20-filled",
	});
}

export default Component;
