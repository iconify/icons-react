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
		"content": `<style>.rs98rr8cl {
  fill: currentColor;
  d: path("M98.3 130.46a6 6 0 0 0-6.54 1.3L69.51 154H48a6 6 0 0 0-6 6v40a6 6 0 0 0 6 6h21.51l22.25 22.24A6 6 0 0 0 102 224v-88a6 6 0 0 0-3.7-5.54m-8.3 79l-13.76-13.7A6 6 0 0 0 72 194H54v-28h18a6 6 0 0 0 4.24-1.76L90 150.49ZM150 180a38.53 38.53 0 0 1-19 33.18a6 6 0 0 1-6-10.36a26.5 26.5 0 0 0 0-45.64a6 6 0 0 1 6-10.36A38.53 38.53 0 0 1 150 180m62.24-96.24l-56-56A6 6 0 0 0 152 26H56a14 14 0 0 0-14 14v80a6 6 0 0 0 12 0V40a2 2 0 0 1 2-2h90v50a6 6 0 0 0 6 6h50v122a2 2 0 0 1-2 2h-32a6 6 0 0 0 0 12h32a14 14 0 0 0 14-14V88a6 6 0 0 0-1.76-4.24M158 46.48L193.52 82H158Z");
}
</style><path class="rs98rr8cl"/>`,
		"fallback": "ph:file-audio-light",
	});
}

export default Component;
