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
		"content": `<style>.zmr-dy30i {
  fill: currentColor;
  d: path("M238.16 113.89L142.1 17.83a20 20 0 0 0-28.21 0l-96 96.06a20 20 0 0 0 0 28.22l96.05 96.06a20 20 0 0 0 28.21 0l96-96.06a20 20 0 0 0 0-28.22ZM128 218.33L37.68 128L128 37.67L218.32 128Z");
}
</style><path class="zmr-dy30i"/>`,
		"fallback": "ph:diamond-bold",
	});
}

export default Component;
