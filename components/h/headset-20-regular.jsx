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
		"content": `<style>.to7dtw9gn {
  fill: currentColor;
  d: path("M4 8a6 6 0 1 1 12 0v3a2 2 0 0 1-2 2h-1a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2A5 5 0 0 0 5 8h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H5v1a2 2 0 0 0 2 2h1a2 2 0 1 1 .268 1H7a3 3 0 0 1-3-3zm11 1h-2v3h1a1 1 0 0 0 1-1zM5 12h2V9H5zm4 4a1 1 0 1 0 2 0a1 1 0 0 0-2 0");
}
</style><path class="to7dtw9gn"/>`,
		"fallback": "fluent:headset-20-regular",
	});
}

export default Component;
