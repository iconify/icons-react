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
		"content": `<style>.xx_8ugbyz {
  fill: currentColor;
  d: path("m221.76 69.66l-88-48.18a12 12 0 0 0-11.52 0l-88 48.18A12 12 0 0 0 28 80.18v95.64a12 12 0 0 0 6.24 10.52l88 48.18a11.95 11.95 0 0 0 11.52 0l88-48.18a12 12 0 0 0 6.24-10.52V80.18a12 12 0 0 0-6.24-10.52M126.08 28.5a3.94 3.94 0 0 1 3.84 0L216.67 76L128 124.52L39.33 76Zm-88 150.83a4 4 0 0 1-2.08-3.51V83.29l88 48.16v94.91Zm179.84 0l-85.92 47v-94.88l88-48.16v92.53a4 4 0 0 1-2.08 3.5Z");
}
</style><path class="xx_8ugbyz"/>`,
		"fallback": "ph:cube-thin",
	});
}

export default Component;
