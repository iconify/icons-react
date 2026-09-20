import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.x66qzacar {
  fill: currentColor;
  d: path("M6.098 3.646a.5.5 0 0 0 0 .708L7.244 5.5H3.5a.5.5 0 0 0 0 1h3.744L6.098 7.646a.5.5 0 1 0 .707.708l2-2a.5.5 0 0 0 0-.708l-2-2a.5.5 0 0 0-.707 0M11 6A5 5 0 1 0 1 6a5 5 0 0 0 10 0M6 2a4 4 0 1 1 0 8a4 4 0 0 1 0-8");
}
</style><path class="x66qzacar"/>`,
		"fallback": "fluent:arrow-circle-right-12-regular",
	});
}

export default Component;
