import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.wkz4kh00x {
  fill: currentColor;
  d: path("M4 16.308V4h12.308v12.308zm1-1h10.308V5H5zM4 20v-1.23h1.23V20zm3.692 0v-1.23h1.231V20zm3.692 0v-1.23h1.231V20zm3.693 0v-1.23h1.23V20zm3.692 0v-1.23H20V20zm0-3.692v-1.231H20v1.23zm0-3.693v-1.23H20v1.23zm0-3.692v-1.23H20v1.23zm0-3.692V4H20v1.23zm-8.615 4.923");
}
</style><path class="wkz4kh00x"/>`,
		"fallback": "material-symbols-light:high-density-outline",
	});
}

export default Component;
