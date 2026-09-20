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
		"content": `<style>.ecn65rbvg {
  fill: currentColor;
  d: path("M240 210h-10V88a6 6 0 0 0-6-6h-64a6 6 0 0 0-6 6v42h-52V40a6 6 0 0 0-6-6H32a6 6 0 0 0-6 6v170H16a6 6 0 0 0 0 12h224a6 6 0 0 0 0-12M166 94h52v116h-52Zm-12 48v68h-52v-68ZM38 46h52v164H38Zm32 26v16a6 6 0 0 1-12 0V72a6 6 0 0 1 12 0m0 48v16a6 6 0 0 1-12 0v-16a6 6 0 0 1 12 0m0 48v16a6 6 0 0 1-12 0v-16a6 6 0 0 1 12 0m52 16v-16a6 6 0 0 1 12 0v16a6 6 0 0 1-12 0m64 0v-16a6 6 0 0 1 12 0v16a6 6 0 0 1-12 0m0-48v-16a6 6 0 0 1 12 0v16a6 6 0 0 1-12 0");
}
</style><path class="ecn65rbvg"/>`,
		"fallback": "ph:city-light",
	});
}

export default Component;
