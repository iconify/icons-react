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
		"content": `<style>.obye9qy3w {
  fill: currentColor;
  d: path("M132 100.13V55.07l33.94 20.36a4 4 0 1 0 4.12-6.86L135.77 48l34.29-20.57a4 4 0 1 0-4.12-6.86L128 43.34L90.06 20.57a4 4 0 1 0-4.12 6.86L120.23 48L85.94 68.57a4 4 0 0 0 4.12 6.86L124 55.07v45.06a68 68 0 1 0 8 0M128 228a60 60 0 1 1 60-60a60.07 60.07 0 0 1-60 60");
}
</style><path class="obye9qy3w"/>`,
		"fallback": "ph:gender-nonbinary-thin",
	});
}

export default Component;
