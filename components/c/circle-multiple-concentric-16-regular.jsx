import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.mlkcbfjpd {
  fill: currentColor;
  d: path("M2 8a6 6 0 1 1 12 0A6 6 0 0 1 2 8m6-7a7 7 0 1 0 0 14A7 7 0 0 0 8 1M5 8a3 3 0 1 1 6 0a3 3 0 0 1-6 0m3-4a4 4 0 1 0 0 8a4 4 0 0 0 0-8");
}
</style><path class="mlkcbfjpd"/>`,
		"fallback": "fluent:circle-multiple-concentric-16-regular",
	});
}

export default Component;
