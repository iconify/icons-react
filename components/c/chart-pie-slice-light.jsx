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
		"content": `<style>.jbzqfbbze {
  fill: currentColor;
  d: path("M102 109.5v-72a6 6 0 0 0-8-5.66a102 102 0 0 0-66.3 114.75a6 6 0 0 0 8.9 4.11l62.4-36a6 6 0 0 0 3-5.2M90 106l-51.66 29.8Q38 131.91 38 128a90.1 90.1 0 0 1 52-81.58Zm38-80a6 6 0 0 0-6 6v93l-79.8 46.46a6 6 0 0 0-2.15 8.22A102 102 0 1 0 128 26m0 192a90.48 90.48 0 0 1-74.38-39.31L131 133.61a6 6 0 0 0 3-5.19V38.2a90 90 0 0 1-6 179.8");
}
</style><path class="jbzqfbbze"/>`,
		"fallback": "ph:chart-pie-slice-light",
	});
}

export default Component;
