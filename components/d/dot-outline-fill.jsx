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
		"content": `<style>.rttthgbmd {
  fill: currentColor;
  d: path("M156 128a28 28 0 1 1-28-28a28 28 0 0 1 28 28");
}
</style><path class="rttthgbmd"/>`,
		"fallback": "ph:dot-outline-fill",
	});
}

export default Component;
