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
		"content": `<style>.wgu3641yj {
  fill: currentColor;
  d: path("M10.25 8A6.25 6.25 0 0 0 4 14.25v19.5A6.25 6.25 0 0 0 10.25 40h27.5A6.25 6.25 0 0 0 44 33.75v-19.5A6.25 6.25 0 0 0 37.75 8zM10 15.5a1.5 1.5 0 0 1 3 0v1a1.5 1.5 0 0 1-3 0zM36.5 14a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-3 0v-1a1.5 1.5 0 0 1 1.5-1.5M10 23.5a1.5 1.5 0 0 1 3 0v1a1.5 1.5 0 0 1-3 0zM36.5 22a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-3 0v-1a1.5 1.5 0 0 1 1.5-1.5M10 31.5a1.5 1.5 0 0 1 3 0v1a1.5 1.5 0 0 1-3 0zM36.5 30a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-3 0v-1a1.5 1.5 0 0 1 1.5-1.5");
}
</style><path class="wgu3641yj"/>`,
		"fallback": "fluent:filmstrip-48-filled",
	});
}

export default Component;
