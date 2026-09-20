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
		"content": `<style>.ljcd-gbpf {
  fill: currentColor;
  d: path("M184.49 167.51a12 12 0 0 1 0 17l-48 48a12 12 0 0 1-17 0l-48-48a12 12 0 0 1 17-17L128 207l39.51-39.52a12 12 0 0 1 16.98.03m-96-79L128 49l39.51 39.52a12 12 0 0 0 17-17l-48-48a12 12 0 0 0-17 0l-48 48a12 12 0 0 0 17 17Z");
}
</style><path class="ljcd-gbpf"/>`,
		"fallback": "ph:caret-up-down-bold",
	});
}

export default Component;
