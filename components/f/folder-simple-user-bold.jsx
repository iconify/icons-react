import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.l09-u9byx {
  fill: currentColor;
  d: path("M220.51 197.94a36 36 0 1 0-57 0a43.75 43.75 0 0 0-15.08 23a12 12 0 0 0 8.52 14.67a11.8 11.8 0 0 0 3.05.39a12 12 0 0 0 11.59-8.92C174 218.2 182.35 212 192 212s18 6.2 20.4 15.08a12 12 0 0 0 23.19-6.17a43.7 43.7 0 0 0-15.08-22.97M192 164a12 12 0 1 1-12 12a12 12 0 0 1 12-12m44-76v20a12 12 0 0 1-24 0V92h-81.33a20.1 20.1 0 0 1-12-4L92 68H44v128h68a12 12 0 0 1 0 24H40a20 20 0 0 1-20-20V64a20 20 0 0 1 20-20h53.33a20.12 20.12 0 0 1 12 4L132 68h84a20 20 0 0 1 20 20");
}
</style><path class="l09-u9byx"/>`,
		"fallback": "ph:folder-simple-user-bold",
	});
}

export default Component;
