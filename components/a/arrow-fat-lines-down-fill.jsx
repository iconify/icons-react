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
		"content": `<style>.kk5943m3u {
  fill: currentColor;
  d: path("M72 40a8 8 0 0 1 8-8h96a8 8 0 0 1 0 16H80a8 8 0 0 1-8-8m159.39 92.94A8 8 0 0 0 224 128h-40v-24a8 8 0 0 0-8-8H80a8 8 0 0 0-8 8v24H32a8 8 0 0 0-5.66 13.66l96 96a8 8 0 0 0 11.32 0l96-96a8 8 0 0 0 1.73-8.72M80 80h96a8 8 0 0 0 0-16H80a8 8 0 0 0 0 16");
}
</style><path class="kk5943m3u"/>`,
		"fallback": "ph:arrow-fat-lines-down-fill",
	});
}

export default Component;
