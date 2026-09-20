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
		"content": `<style>.tu7dpabqj {
  fill: currentColor;
  d: path("M13.5 8a5.5 5.5 0 1 1 0 11a5.5 5.5 0 0 1 0-11m0 1a4.5 4.5 0 1 0 0 9a4.5 4.5 0 0 0 0-9m0 4a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 .5-.5M11 2a3 3 0 0 1 3 3v2.02a7 7 0 0 0-.5-.02q-.252.001-.5.02V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2.02q-.019.248-.02.5q.002.252.021.5H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zm2.5 8.75a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5M7.5 8a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zM11 5a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1z");
}
</style><path class="tu7dpabqj"/>`,
		"fallback": "fluent:card-ui-info-20-regular",
	});
}

export default Component;
