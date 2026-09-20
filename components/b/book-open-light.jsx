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
		"content": `<style>.i0l2tob3m {
  fill: currentColor;
  d: path("M232 50h-72a38 38 0 0 0-32 17.55A38 38 0 0 0 96 50H24a6 6 0 0 0-6 6v144a6 6 0 0 0 6 6h72a26 26 0 0 1 26 26a6 6 0 0 0 12 0a26 26 0 0 1 26-26h72a6 6 0 0 0 6-6V56a6 6 0 0 0-6-6M96 194H30V62h66a26 26 0 0 1 26 26v116.31A37.86 37.86 0 0 0 96 194m130 0h-66a37.87 37.87 0 0 0-26 10.32V88a26 26 0 0 1 26-26h66Z");
}
</style><path class="i0l2tob3m"/>`,
		"fallback": "ph:book-open-light",
	});
}

export default Component;
