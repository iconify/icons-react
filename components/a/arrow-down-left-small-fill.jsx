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
		"content": `<style>.bkzb6vbjm {
  fill: currentColor;
  d: path("M7 16v-6a1 1 0 0 1 2 0v3.586l6.293-6.293a.999.999 0 1 1 1.414 1.414L10.414 15H14a1 1 0 0 1 0 2H8a.997.997 0 0 1-1-1");
}
</style><path class="bkzb6vbjm"/>`,
		"fallback": "coolicons:arrow-down-left-small-fill",
	});
}

export default Component;
