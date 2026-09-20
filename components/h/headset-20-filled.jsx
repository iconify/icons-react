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
		"content": `<style>.x0cii72sd {
  fill: currentColor;
  d: path("M10 2a6 6 0 0 0-6 6v6a3 3 0 0 0 3 3h1.268A2 2 0 1 0 8 16H7a2 2 0 0 1-2-2v-1h2a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H5a5 5 0 0 1 10 0h-2a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 0 2-2V8a6 6 0 0 0-6-6");
}
</style><path class="x0cii72sd"/>`,
		"fallback": "fluent:headset-20-filled",
	});
}

export default Component;
