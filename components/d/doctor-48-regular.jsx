import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ygnxr6kkf {
  fill: currentColor;
  d: path("M18.5 8.5v8.75c0 .69-.56 1.25-1.25 1.25H8.5v11h8.75c.69 0 1.25.56 1.25 1.25v8.75h11v-8.75c0-.69.56-1.25 1.25-1.25h8.75v-11h-8.75c-.69 0-1.25-.56-1.25-1.25V8.5zM16 8.25A2.25 2.25 0 0 1 18.25 6h11.5A2.25 2.25 0 0 1 32 8.25V16h7.75A2.25 2.25 0 0 1 42 18.25v11.5A2.25 2.25 0 0 1 39.75 32H32v7.75A2.25 2.25 0 0 1 29.75 42h-11.5A2.25 2.25 0 0 1 16 39.75V32H8.25A2.25 2.25 0 0 1 6 29.75v-11.5A2.25 2.25 0 0 1 8.25 16H16z");
}
</style><path class="ygnxr6kkf"/>`,
		"fallback": "fluent:doctor-48-regular",
	});
}

export default Component;
