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
		"content": `<style>.izkg53yvu {
  fill: currentColor;
  d: path("M17 6a.997.997 0 0 1 1 1v7a1 1 0 0 1-2 0V9.414l-8.293 8.293a.999.999 0 1 1-1.414-1.414L14.586 8H10a1 1 0 0 1 0-2Z");
}
</style><path class="izkg53yvu"/>`,
		"fallback": "coolicons:arrow-up-right-fill",
	});
}

export default Component;
