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
		"content": `<style>.bj035n_-k {
  fill: currentColor;
  d: path("M228 48a20 20 0 0 0-20-20H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20Zm-35 68l-53-53V52h11l53 53v11Zm-53-19l19 19h-19Zm64-26l-19-19h19Zm-88-19v64H52V52Zm-11 152l-53-53v-11h11l53 53v11Zm11-45l-19-19h19Zm-64 26l19 19H52Zm88 19v-64h64v64Z");
}
</style><path class="bj035n_-k"/>`,
		"fallback": "ph:checkerboard-bold",
	});
}

export default Component;
