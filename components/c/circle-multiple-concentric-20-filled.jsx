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
		"content": `<style>.w-g_csl8m {
  fill: currentColor;
  d: path("M3.5 10a6.5 6.5 0 1 1 13 0a6.5 6.5 0 0 1-13 0M10 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16m-3.5 8a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0M10 5a5 5 0 1 0 0 10a5 5 0 0 0 0-10");
}
</style><path class="w-g_csl8m"/>`,
		"fallback": "fluent:circle-multiple-concentric-20-filled",
	});
}

export default Component;
