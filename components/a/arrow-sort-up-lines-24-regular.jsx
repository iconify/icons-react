import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.kon5wac9t {
  fill: currentColor;
  d: path("M18 21.25a.75.75 0 0 1-1.5 0V4.56l-2.22 2.22a.75.75 0 1 1-1.06-1.06l3.5-3.5a.75.75 0 0 1 1.06 0l3.5 3.5a.75.75 0 0 1-1.06 1.06L18 4.56zM2.75 19.5a.75.75 0 0 1 0-1.5h10.5a.75.75 0 0 1 0 1.5zM6 14.75c0 .414.336.75.75.75h6.5a.75.75 0 0 0 0-1.5h-6.5a.75.75 0 0 0-.75.75m4.75-3.25a.75.75 0 0 1 0-1.5h2.5a.75.75 0 0 1 0 1.5z");
}
</style><path class="kon5wac9t"/>`,
		"fallback": "fluent:arrow-sort-up-lines-24-regular",
	});
}

export default Component;
