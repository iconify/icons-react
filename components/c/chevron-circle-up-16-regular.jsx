import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.q3qmhmbuz {
  fill: currentColor;
  d: path("M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1m0 1a6 6 0 1 0 0 12A6 6 0 0 0 8 2m-.354 3.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 1 1-.707.708L8 6.707L5.354 9.354a.5.5 0 1 1-.708-.708z");
}
</style><path class="q3qmhmbuz"/>`,
		"fallback": "fluent:chevron-circle-up-16-regular",
	});
}

export default Component;
