import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ybyetyblk {
  fill: currentColor;
  d: path("M5.75 2A1.75 1.75 0 0 0 4 3.75v8.5c0 .966.784 1.75 1.75 1.75h3.5A1.75 1.75 0 0 0 11 12.25v-8.5A1.75 1.75 0 0 0 9.25 2zM5 3.75A.75.75 0 0 1 5.75 3h3.5a.75.75 0 0 1 .75.75V5H5zM5 6h5v6.25a.75.75 0 0 1-.75.75h-3.5a.75.75 0 0 1-.75-.75z");
}
</style><path class="ybyetyblk"/>`,
		"fallback": "fluent:column-single-16-regular",
	});
}

export default Component;
