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
		"content": `<style>.f_s-sjbbb {
  fill: currentColor;
  d: path("M200.49 200.49a12 12 0 0 1-17 0L76 93v75a12 12 0 0 1-24 0V64a12 12 0 0 1 12-12h104a12 12 0 0 1 0 24H93l107.49 107.51a12 12 0 0 1 0 16.98");
}
</style><path class="f_s-sjbbb"/>`,
		"fallback": "ph:arrow-up-left-bold",
	});
}

export default Component;
