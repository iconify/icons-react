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
		"content": `<style>.y_6isob3h {
  fill: currentColor;
  d: path("m232.5 119.55l-96.05-96.06a12 12 0 0 0-16.9 0l-96 96.06a12 12 0 0 0 0 16.9l96.05 96.06a12 12 0 0 0 16.9 0l96.05-96.06a12 12 0 0 0 0-16.9Zm-5.66 11.24l-96.05 96.06a4 4 0 0 1-5.58 0l-96-96.06a3.94 3.94 0 0 1 0-5.58l96.05-96.06a4 4 0 0 1 5.58 0l96.05 96.06a3.94 3.94 0 0 1 0 5.58Z");
}
</style><path class="y_6isob3h"/>`,
		"fallback": "ph:diamond-thin",
	});
}

export default Component;
