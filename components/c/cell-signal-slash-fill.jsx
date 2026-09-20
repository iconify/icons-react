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
		"content": `<style>.rcmeh1bvp {
  fill: currentColor;
  d: path("M213.38 221.92a8 8 0 0 1-11.3-.54l-5.51-6.06a16.1 16.1 0 0 1-4.57.68H32a16 16 0 0 1-15.06-10.59a16.4 16.4 0 0 1 4.07-17l79.13-79.12l-57.88-63.67a8.22 8.22 0 0 1 .14-11.38a8 8 0 0 1 11.48.37l160 176a8 8 0 0 1-.5 11.31M201 172.66a4 4 0 0 0 7-2.69V40a16 16 0 0 0-27.32-11.32l-55.21 55.2a4 4 0 0 0-.13 5.52Z");
}
</style><path class="rcmeh1bvp"/>`,
		"fallback": "ph:cell-signal-slash-fill",
	});
}

export default Component;
