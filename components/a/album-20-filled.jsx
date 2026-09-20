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
		"content": `<style>.gf8irvbwx {
  fill: currentColor;
  d: path("M2 6a2 2 0 0 1 2-2v12a2 2 0 0 1-2-2zm7 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5zM5 16V4h11a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2zm4.5-9A1.5 1.5 0 0 0 8 8.5v1A1.5 1.5 0 0 0 9.5 11h4A1.5 1.5 0 0 0 15 9.5v-1A1.5 1.5 0 0 0 13.5 7z");
}
</style><path class="gf8irvbwx"/>`,
		"fallback": "fluent:album-20-filled",
	});
}

export default Component;
