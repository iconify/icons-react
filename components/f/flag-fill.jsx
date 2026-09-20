import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ql3_cebia {
  fill: currentColor;
  d: path("M232 56v120a8 8 0 0 1-2.76 6c-15.28 13.23-29.89 18-43.82 18c-18.91 0-36.57-8.74-53-16.85C105.87 170 82.79 158.61 56 179.77V224a8 8 0 0 1-16 0V56a8 8 0 0 1 2.77-6c36-31.18 68.31-15.21 96.79-1.12C167 62.46 190.79 74.2 218.76 50A8 8 0 0 1 232 56");
}
</style><path class="ql3_cebia"/>`,
		"fallback": "ph:flag-fill",
	});
}

export default Component;
