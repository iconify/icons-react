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
		"content": `<style>.z6ka-8b3b {
  fill: currentColor;
  d: path("M232 44H16A12 12 0 0 0 4 56v152a12 12 0 0 0 24 0v-12h16v12a12 12 0 0 0 24 0v-12h16v12a12 12 0 0 0 24 0v-12h16v12a12 12 0 0 0 24 0v-12h84a20 20 0 0 0 20-20V64a20 20 0 0 0-20-20m-4 128H28V68h200Zm-52-12a40 40 0 1 0-40-40a40 40 0 0 0 40 40m0-56a16 16 0 1 1-16 16a16 16 0 0 1 16-16m-96 56a40 40 0 1 0-40-40a40 40 0 0 0 40 40m0-56a16 16 0 1 1-16 16a16 16 0 0 1 16-16");
}
</style><path class="z6ka-8b3b"/>`,
		"fallback": "ph:graphics-card-bold",
	});
}

export default Component;
