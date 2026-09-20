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
		"content": `<style>.zlbtp2k3w {
  fill: currentColor;
  d: path("M224 44h-56a4 4 0 0 0-2.94 1.29L70.25 148H32a12 12 0 0 0-12 12v40a12 12 0 0 0 12 12h56a4 4 0 0 0 2.94-1.29L185.75 108H224a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12m4 52a4 4 0 0 1-4 4h-40a4 4 0 0 0-2.94 1.29L86.25 204H32a4 4 0 0 1-4-4v-40a4 4 0 0 1 4-4h40a4 4 0 0 0 2.94-1.29L169.75 52H224a4 4 0 0 1 4 4Zm-1.17 77.17a4 4 0 0 1-5.66 5.66L204 161.66V208a4 4 0 0 1-8 0v-46.34l-17.17 17.17a4 4 0 0 1-5.66-5.66l24-24a4 4 0 0 1 5.66 0Z");
}
</style><path class="zlbtp2k3w"/>`,
		"fallback": "ph:escalator-up-thin",
	});
}

export default Component;
