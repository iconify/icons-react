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
		"content": `<style>.dg9-0kbvp {
  fill: currentColor;
  d: path("M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m34.83-102.83a4 4 0 0 1-5.66 5.66L132 97.66V168a4 4 0 0 1-8 0V97.66l-25.17 25.17a4 4 0 0 1-5.66-5.66l32-32a4 4 0 0 1 5.66 0Z");
}
</style><path class="dg9-0kbvp"/>`,
		"fallback": "ph:arrow-circle-up-thin",
	});
}

export default Component;
