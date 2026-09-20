import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.hub4hrb3t {
  fill: currentColor;
  d: path("M4 5a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3h-3v-1a.5.5 0 0 0-1 0v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-3a3 3 0 0 1 3-3h1a.5.5 0 0 0 0-1H5q-.519.002-1 .126zm4.752 5.999a.75.75 0 1 0 0-1.499a.75.75 0 0 0 0 1.499M8.5 7a.5.5 0 0 0 0 1a2.5 2.5 0 0 1 2.502 2.502a.5.5 0 1 0 1 0A3.5 3.5 0 0 0 8.5 7m0-2.5a.5.5 0 1 0 0 1a5.003 5.003 0 0 1 5.003 5.003a.5.5 0 0 0 1 0A6.003 6.003 0 0 0 8.5 4.5");
}
</style><path class="hub4hrb3t"/>`,
		"fallback": "fluent:cast-multiple-20-filled",
	});
}

export default Component;
