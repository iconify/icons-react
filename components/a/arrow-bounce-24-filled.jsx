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
		"content": `<style>.h2y0ikqvc {
  fill: currentColor;
  d: path("M11 7a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v7a1 1 0 1 0 2 0V9.414l8.043 8.043a1 1 0 0 0 1.414 0l8.25-8.25a1 1 0 0 0-1.414-1.414l-7.543 7.543L5.414 8H10a1 1 0 0 0 1-1");
}
</style><path class="h2y0ikqvc"/>`,
		"fallback": "fluent:arrow-bounce-24-filled",
	});
}

export default Component;
