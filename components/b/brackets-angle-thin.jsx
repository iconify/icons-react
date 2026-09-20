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
		"content": `<style>.zhsni4ffw {
  fill: currentColor;
  d: path("M83.37 42.15L28.74 128l54.63 85.85a4 4 0 0 1-1.22 5.52A4 4 0 0 1 80 220a4 4 0 0 1-3.37-1.85l-56-88a4 4 0 0 1 0-4.3l56-88a4 4 0 1 1 6.74 4.3m152 83.7l-56-88a4 4 0 1 0-6.74 4.3L227.26 128l-54.63 85.85a4 4 0 0 0 1.22 5.52a4 4 0 0 0 2.15.63a4 4 0 0 0 3.37-1.85l56-88a4 4 0 0 0 0-4.3");
}
</style><path class="zhsni4ffw"/>`,
		"fallback": "ph:brackets-angle-thin",
	});
}

export default Component;
