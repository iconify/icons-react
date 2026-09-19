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
		"content": `<style>.qgx_e8bxr {
  fill: currentColor;
  d: path("m12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z");
}
</style><path class="qgx_e8bxr"/>`,
		"fallback": "ic:baseline-arrow-forward",
	});
}

export default Component;
