import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.b0cu_kbgi {
  fill: currentColor;
  d: path("M5.502 3a4.5 4.5 0 0 0 0 9h5.008a4.5 4.5 0 1 0 0-9zM3.504 7.5a.5.5 0 0 1 .5-.5h1V6a.5.5 0 1 1 1 0v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0V8h-1a.5.5 0 0 1-.5-.5M11 9a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-2a1 1 0 1 1 0-2a1 1 0 0 1 0 2");
}
</style><path class="b0cu_kbgi"/>`,
		"fallback": "fluent:games-16-filled",
	});
}

export default Component;
