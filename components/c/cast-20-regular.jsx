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
		"content": `<style>.stf6nob5r {
  fill: currentColor;
  d: path("M2 5.5A1.5 1.5 0 0 1 3.5 4h13A1.5 1.5 0 0 1 18 5.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 2 14.5zM3.5 5a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5zm1.999 8.25a.75.75 0 1 1-1.499 0a.75.75 0 0 1 1.499 0M3.997 10.5a.5.5 0 0 1 .5-.5A3.5 3.5 0 0 1 8 13.502a.5.5 0 1 1-1 0A2.503 2.503 0 0 0 4.497 11a.5.5 0 0 1-.5-.5m0-2.5a.5.5 0 0 1 .5-.5a6.003 6.003 0 0 1 6.003 6.003a.5.5 0 0 1-1 0A5.003 5.003 0 0 0 4.497 8.5a.5.5 0 0 1-.5-.5");
}
</style><path class="stf6nob5r"/>`,
		"fallback": "fluent:cast-20-regular",
	});
}

export default Component;
