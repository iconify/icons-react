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
		"content": `<style>.w6g1o3beg {
  fill: currentColor;
  d: path("M80 96a8 8 0 0 1-8 8H24a8 8 0 0 1 0-16h48a8 8 0 0 1 8 8m72 24h-48a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16m32-48h48a8 8 0 0 0 0-16h-48a8 8 0 0 0 0 16M72 120H24a8 8 0 0 0-8 8v64a8 8 0 0 0 8 8h48a8 8 0 0 0 8-8v-64a8 8 0 0 0-8-8m160-32h-48a8 8 0 0 0-8 8v96a8 8 0 0 0 8 8h48a8 8 0 0 0 8-8V96a8 8 0 0 0-8-8m-80 64h-48a8 8 0 0 0-8 8v32a8 8 0 0 0 8 8h48a8 8 0 0 0 8-8v-32a8 8 0 0 0-8-8");
}
</style><path class="w6g1o3beg"/>`,
		"fallback": "ph:equalizer-fill",
	});
}

export default Component;
