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
		"content": `<style>.zugh7vbjc {
  fill: currentColor;
  d: path("M4 4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h5.5V4zm2 9.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5M10.5 4v12H16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm2 9h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1");
}
</style><path class="zugh7vbjc"/>`,
		"fallback": "fluent:dual-screen-20-filled",
	});
}

export default Component;
