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
		"content": `<style>.nv6jqtami {
  fill: currentColor;
  d: path("M216 72h-84.69L104 44.69A15.88 15.88 0 0 0 92.69 40H40a16 16 0 0 0-16 16v144.62A15.41 15.41 0 0 0 39.39 216h177.5A15.13 15.13 0 0 0 232 200.89V88a16 16 0 0 0-16-16M40 56h52.69l16 16H40Zm112 96h-48a8 8 0 0 1 0-16h48a8 8 0 0 1 0 16");
}
</style><path class="nv6jqtami"/>`,
		"fallback": "ph:folder-minus-fill",
	});
}

export default Component;
