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
		"content": `<style>.rda9iogoe {
  fill: currentColor;
  d: path("M240 120h-24.37A88.13 88.13 0 0 0 136 40.37V16a8 8 0 0 0-16 0v24.37A88.13 88.13 0 0 0 40.37 120H16a8 8 0 0 0 0 16h24.37A88.13 88.13 0 0 0 120 215.63V240a8 8 0 0 0 16 0v-24.37A88.13 88.13 0 0 0 215.63 136H240a8 8 0 0 0 0-16m-112 80a72 72 0 1 1 72-72a72.08 72.08 0 0 1-72 72");
}
</style><path class="rda9iogoe"/>`,
		"fallback": "ph:gps",
	});
}

export default Component;
