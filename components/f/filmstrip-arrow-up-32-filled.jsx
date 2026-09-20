import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.iplv67_3d {
  fill: currentColor;
  d: path("M23 15.5a7.5 7.5 0 1 1 0 15a7.5 7.5 0 0 1 0-15m.78 2.22a.75.75 0 0 0-1.06 0l-4 4a.75.75 0 1 0 1.06 1.06l2.72-2.72v7.69a.75.75 0 0 0 1.5 0v-7.69l2.72 2.72a.75.75 0 1 0 1.06-1.06zM25.5 4A4.5 4.5 0 0 1 30 8.5v8.845A9 9 0 0 0 15.517 28H6.5A4.5 4.5 0 0 1 2 23.5v-15A4.5 4.5 0 0 1 6.5 4zM6 20a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1m0-6a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1m0-6a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0V9a1 1 0 0 0-1-1m20 0a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0V9a1 1 0 0 0-1-1");
}
</style><path class="iplv67_3d"/>`,
		"fallback": "fluent:filmstrip-arrow-up-32-filled",
	});
}

export default Component;
