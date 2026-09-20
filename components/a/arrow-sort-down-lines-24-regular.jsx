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
		"content": `<style>.q_nqiubqa {
  fill: currentColor;
  d: path("M18 2.75a.75.75 0 0 0-1.5 0v16.69l-2.22-2.22a.75.75 0 1 0-1.06 1.06l3.5 3.5a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 1 0-1.06-1.06L18 19.44zM2.75 4.5a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5zM6 9.25a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5A.75.75 0 0 1 6 9.25m4.75 3.25a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5z");
}
</style><path class="q_nqiubqa"/>`,
		"fallback": "fluent:arrow-sort-down-lines-24-regular",
	});
}

export default Component;
