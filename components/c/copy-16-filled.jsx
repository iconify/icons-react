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
		"content": `<style>.bqf_23q4b {
  fill: currentColor;
  d: path("M5 8.5A3.5 3.5 0 0 0 8.5 12H10v.5A2.5 2.5 0 0 1 7.5 15h-4A2.5 2.5 0 0 1 1 12.5v-5A2.5 2.5 0 0 1 3.5 5H5zM12.5 1A2.5 2.5 0 0 1 15 3.5v5a2.5 2.5 0 0 1-2.5 2.5h-4A2.5 2.5 0 0 1 6 8.5v-5A2.5 2.5 0 0 1 8.5 1z");
}
</style><path class="bqf_23q4b"/>`,
		"fallback": "fluent:copy-16-filled",
	});
}

export default Component;
