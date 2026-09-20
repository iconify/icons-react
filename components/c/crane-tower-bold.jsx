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
		"content": `<style>.x_bwemb-n {
  fill: currentColor;
  d: path("M240 76H111.42L90.73 34.63A12 12 0 0 0 80 28H48a12 12 0 0 0-12 12v36H24a12 12 0 0 0 0 24h12v104H24a12 12 0 0 0 0 24h104a12 12 0 0 0 0-24h-12V100h88v80h-12v-4a12 12 0 0 0-24 0v8a20 20 0 0 0 20 20h20a20 20 0 0 0 20-20v-84h12a12 12 0 0 0 0-24M60 52h12.58l12 24H60Zm0 152v-40h32v40Zm32-64H60v-40h32Z");
}
</style><path class="x_bwemb-n"/>`,
		"fallback": "ph:crane-tower-bold",
	});
}

export default Component;
