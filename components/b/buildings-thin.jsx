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
		"content": `<style>.z_-n8f_3j {
  fill: currentColor;
  d: path("M240 212h-20V96a12 12 0 0 0-12-12h-68V32a12 12 0 0 0-18.66-10l-80 53.33a12 12 0 0 0-5.34 10V212H16a4 4 0 0 0 0 8h224a4 4 0 0 0 0-8M208 92a4 4 0 0 1 4 4v116h-72V92ZM44 85.34A4 4 0 0 1 45.78 82l80-53.33A4 4 0 0 1 132 32v180H44ZM108 112v16a4 4 0 0 1-8 0v-16a4 4 0 0 1 8 0m-32 0v16a4 4 0 0 1-8 0v-16a4 4 0 0 1 8 0m0 56v16a4 4 0 0 1-8 0v-16a4 4 0 0 1 8 0m32 0v16a4 4 0 0 1-8 0v-16a4 4 0 0 1 8 0");
}
</style><path class="z_-n8f_3j"/>`,
		"fallback": "ph:buildings-thin",
	});
}

export default Component;
