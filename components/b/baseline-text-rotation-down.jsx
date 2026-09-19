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
		"content": `<style>.oerancugj {
  fill: currentColor;
  d: path("M21 12v-1.5L10 5.75v2.1l2.2.9v5l-2.2.9v2.1zm-7-2.62l5.02 1.87L14 13.12zM6 19.75l3-3H7V4.25H5v12.5H3z");
}
</style><path class="oerancugj"/>`,
		"fallback": "ic:baseline-text-rotation-down",
	});
}

export default Component;
