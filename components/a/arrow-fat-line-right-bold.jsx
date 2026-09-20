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
		"content": `<style>.qv1xedcam {
  fill: currentColor;
  d: path("m240.49 119.51l-96-96A12 12 0 0 0 124 32v36H80a12 12 0 0 0-12 12v96a12 12 0 0 0 12 12h44v36a12 12 0 0 0 20.49 8.49l96-96a12 12 0 0 0 0-16.98M148 195v-19a12 12 0 0 0-12-12H92V92h44a12 12 0 0 0 12-12V61l67 67ZM52 80v96a12 12 0 0 1-24 0V80a12 12 0 0 1 24 0");
}
</style><path class="qv1xedcam"/>`,
		"fallback": "ph:arrow-fat-line-right-bold",
	});
}

export default Component;
