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
		"content": `<style>.wji_xtg8t {
  fill: currentColor;
  d: path("M10 15.5a1.5 1.5 0 0 1 3 0v1a1.5 1.5 0 0 1-3 0zM36.5 14a1.5 1.5 0 0 0-1.5 1.5v1a1.5 1.5 0 0 0 3 0v-1a1.5 1.5 0 0 0-1.5-1.5M10 23.5a1.5 1.5 0 0 1 3 0v1a1.5 1.5 0 0 1-3 0zM36.5 22a1.5 1.5 0 0 0-1.5 1.5v1a1.5 1.5 0 0 0 3 0v-1a1.5 1.5 0 0 0-1.5-1.5M10 31.5a1.5 1.5 0 0 1 3 0v1a1.5 1.5 0 0 1-3 0zM36.5 30a1.5 1.5 0 0 0-1.5 1.5v1a1.5 1.5 0 0 0 3 0v-1a1.5 1.5 0 0 0-1.5-1.5M4 14.25A6.25 6.25 0 0 1 10.25 8h27.5A6.25 6.25 0 0 1 44 14.25v19.5A6.25 6.25 0 0 1 37.75 40h-27.5A6.25 6.25 0 0 1 4 33.75zm6.25-3.75a3.75 3.75 0 0 0-3.75 3.75v19.5a3.75 3.75 0 0 0 3.75 3.75h27.5a3.75 3.75 0 0 0 3.75-3.75v-19.5a3.75 3.75 0 0 0-3.75-3.75z");
}
</style><path class="wji_xtg8t"/>`,
		"fallback": "fluent:filmstrip-48-regular",
	});
}

export default Component;
