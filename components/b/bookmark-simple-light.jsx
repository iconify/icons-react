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
		"content": `<style>.vhphn2a-p {
  fill: currentColor;
  d: path("M184 34H72a14 14 0 0 0-14 14v176a6 6 0 0 0 9.18 5.09l60.81-38l60.83 38A6 6 0 0 0 198 224V48a14 14 0 0 0-14-14m2 179.17l-54.83-34.26a6 6 0 0 0-6.36 0L70 213.17V48a2 2 0 0 1 2-2h112a2 2 0 0 1 2 2Z");
}
</style><path class="vhphn2a-p"/>`,
		"fallback": "ph:bookmark-simple-light",
	});
}

export default Component;
