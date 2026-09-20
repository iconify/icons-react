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
		"content": `<style>.j3c9ixwwx {
  fill: currentColor;
  d: path("M10.5 16H16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-5.5zm-1-12H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h5.5z");
}
</style><path class="j3c9ixwwx"/>`,
		"fallback": "fluent:dual-screen-group-20-filled",
	});
}

export default Component;
