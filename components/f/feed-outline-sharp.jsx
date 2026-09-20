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
		"content": `<style>.qnv1v1b1g {
  fill: currentColor;
  d: path("M3 21V3h13l5 5v13zm2-2h14V9h-4V5H5zm2-2h10v-2H7zm0-8h5V7H7zm0 4h10v-2H7zM5 5v4zv14z");
}
</style><path class="qnv1v1b1g"/>`,
		"fallback": "material-symbols:feed-outline-sharp",
	});
}

export default Component;
