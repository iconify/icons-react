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
		"content": `<style>.cs2lrub_i {
  fill: currentColor;
  d: path("M2 4.5A1.5 1.5 0 0 1 3.5 3h13a1.5 1.5 0 0 1 0 3h-13A1.5 1.5 0 0 1 2 4.5M10 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6m-2 3a2 2 0 1 1 4 0a2 2 0 0 1-4 0M3 7h14v4a7 7 0 1 1-14 0zm7 1a4 4 0 1 0 0 8a4 4 0 0 0 0-8");
}
</style><path class="cs2lrub_i"/>`,
		"fallback": "fluent:camera-dome-20-filled",
	});
}

export default Component;
