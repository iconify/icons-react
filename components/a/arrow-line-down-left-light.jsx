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
		"content": `<style>.q-2arpbox {
  fill: currentColor;
  d: path("M230 48a6 6 0 0 1-6 6H48a6 6 0 0 1 0-12h176a6 6 0 0 1 6 6m-50.24 43.76L78 193.52V112a6 6 0 0 0-12 0v96a6 6 0 0 0 6 6h96a6 6 0 0 0 0-12H86.48l101.76-101.76a6 6 0 0 0-8.48-8.48");
}
</style><path class="q-2arpbox"/>`,
		"fallback": "ph:arrow-line-down-left-light",
	});
}

export default Component;
