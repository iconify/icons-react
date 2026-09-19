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
		"content": `<style>.cf8ph6q3o {
  fill: currentColor;
  d: path("M7 7h10v3l4-4l-4-4v3H5v6h2zm10 10H7v-3l-4 4l4 4v-3h12v-6h-2zm-4-2V9h-1l-2 1v1h1.5v4z");
}
</style><path class="cf8ph6q3o"/>`,
		"fallback": "ic:baseline-repeat-one",
	});
}

export default Component;
