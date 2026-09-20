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
		"content": `<style>.m52keib5i {
  fill: currentColor;
  d: path("M4 2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h3.5a.5.5 0 0 0 0-1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 0-1zm4.854 1.646a.5.5 0 1 0-.708.708L9.293 5.5H5a.5.5 0 0 0 0 1h4.293L8.146 7.646a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708z");
}
</style><path class="m52keib5i"/>`,
		"fallback": "fluent:arrow-exit-12-regular",
	});
}

export default Component;
