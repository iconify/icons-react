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
		"content": `<style>.rfvgflb_f {
  fill: currentColor;
  d: path("M233 135a60 60 0 0 0-89.62-35.45l16.39-65.44a8 8 0 0 0-3.45-8.68a60 60 0 1 0-60.63 103.48l-64.87 18.53a8 8 0 0 0-5.8 7.32a60 60 0 0 0 44.42 60.66a60.5 60.5 0 0 0 15.62 2.07a60.07 60.07 0 0 0 59.88-62l48.48 46.92a8 8 0 0 0 9.25 1.35A60 60 0 0 0 233 135m-102.56 12.85a20 20 0 1 1 17.41-22.29a20 20 0 0 1-17.41 22.29");
}
</style><path class="rfvgflb_f"/>`,
		"fallback": "ph:fan-fill",
	});
}

export default Component;
