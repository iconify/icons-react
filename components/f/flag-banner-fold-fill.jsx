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
		"content": `<style>.k555aw0xu {
  fill: currentColor;
  d: path("m131.79 69.65l-43.63 96a4 4 0 0 1-3.64 2.35H28.23a8.2 8.2 0 0 1-6.58-3.13a8 8 0 0 1 .43-10.25L57.19 116L22.08 77.38a8 8 0 0 1-.43-10.26A8.22 8.22 0 0 1 28.23 64h99.92a4 4 0 0 1 3.64 5.65m105.77-27.41a8.3 8.3 0 0 0-5.79-2.24H168a8 8 0 0 0-7.28 4.69l-42.57 93.65a4 4 0 0 0 3.64 5.66h57.79l-34.86 76.69a8 8 0 1 0 14.56 6.62l80-176a8 8 0 0 0-1.72-9.07");
}
</style><path class="k555aw0xu"/>`,
		"fallback": "ph:flag-banner-fold-fill",
	});
}

export default Component;
