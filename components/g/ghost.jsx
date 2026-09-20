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
		"content": `<style>.gegpd0j0w {
  fill: currentColor;
  d: path("M112 116a12 12 0 1 1-12-12a12 12 0 0 1 12 12m44-12a12 12 0 1 0 12 12a12 12 0 0 0-12-12m68 16v96a8 8 0 0 1-13.07 6.19l-24.26-19.85l-24.27 19.85a8 8 0 0 1-10.13 0L128 202.34l-24.27 19.85a8 8 0 0 1-10.13 0l-24.27-19.85l-24.26 19.85A8 8 0 0 1 32 216v-96a96 96 0 0 1 192 0m-16 0a80 80 0 0 0-160 0v79.12l16.27-13.31a8 8 0 0 1 10.13 0l24.27 19.85l24.26-19.85a8 8 0 0 1 10.14 0l24.26 19.85l24.27-19.85a8 8 0 0 1 10.13 0L208 199.12Z");
}
</style><path class="gegpd0j0w"/>`,
		"fallback": "ph:ghost",
	});
}

export default Component;
