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
		"content": `<style>.xa9obzz4u {
  fill: currentColor;
  d: path("M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m60-92a4 4 0 0 1-4 4h-46.34l33.17 33.17a4 4 0 0 1-5.66 5.66l-40-40A4 4 0 0 1 128 124h56a4 4 0 0 1 4 4");
}
</style><path class="xa9obzz4u"/>`,
		"fallback": "ph:clock-afternoon-thin",
	});
}

export default Component;
