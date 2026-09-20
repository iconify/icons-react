import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.qt_e4xbfx {
  fill: currentColor;
  d: path("M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10m12 0a5 5 0 1 0 0-10a5 5 0 0 0 0 10m-7 7a5 5 0 1 1-10 0a5 5 0 0 1 10 0m7 5a5 5 0 1 0 0-10a5 5 0 0 0 0 10");
}
</style><path class="qt_e4xbfx"/>`,
		"fallback": "fluent:grid-circles-28-filled",
	});
}

export default Component;
