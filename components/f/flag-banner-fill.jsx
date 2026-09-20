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
		"content": `<style>.jdymhgg5i {
  fill: currentColor;
  d: path("m239.22 59.44l-45.63 95.82a4 4 0 0 1-.16.34l-34.21 71.84a8 8 0 1 1-14.44-6.88L173.62 160H40a8 8 0 0 1-5.66-13.66L76.69 104L34.34 61.66A8 8 0 0 1 40 48h192a8 8 0 0 1 7.22 11.44");
}
</style><path class="jdymhgg5i"/>`,
		"fallback": "ph:flag-banner-fill",
	});
}

export default Component;
