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
		"content": `<style>.r4p55qyfp {
  fill: currentColor;
  d: path("M168 76a12 12 0 1 1-12-12a12 12 0 0 1 12 12m48.72 67.64c-19.37 34.9-55.44 53.76-107.24 56.1l-22 51.41A8 8 0 0 1 80.1 256h-.51a8 8 0 0 1-7.19-5.78l-14.8-51.83l-51.8-14.83a8 8 0 0 1-1-15.05l51.41-22c2.35-51.78 21.21-87.84 56.09-107.22c24.75-13.74 52.74-15.84 71.88-15.18c18.64.64 36 4.27 38.86 6a8 8 0 0 1 2.83 2.83c1.69 2.85 5.33 20.21 6 38.85c.68 19.1-1.41 47.1-15.15 71.85m-4.3-100.07c-14.15-3-64.1-11-100.3 14.75a81.2 81.2 0 0 0-16 15.07a36 36 0 0 0 39.35 38.44a8 8 0 0 1 8.73 8.73a36 36 0 0 0 38.47 39.34a80.8 80.8 0 0 0 15-16c25.75-36.17 17.75-86.16 14.75-100.33");
}
</style><path class="r4p55qyfp"/>`,
		"fallback": "ph:fish-fill",
	});
}

export default Component;
