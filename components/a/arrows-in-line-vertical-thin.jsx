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
		"content": `<style>.iy39ukbvk {
  fill: currentColor;
  d: path("M220 128a4 4 0 0 1-4 4H40a4 4 0 0 1 0-8h176a4 4 0 0 1 4 4m-94.83-29.17a4 4 0 0 0 5.66 0l32-32a4 4 0 1 0-5.66-5.66L132 86.34V16a4 4 0 0 0-8 0v70.34L98.83 61.17a4 4 0 0 0-5.66 5.66Zm5.66 58.34a4 4 0 0 0-5.66 0l-32 32a4 4 0 0 0 5.66 5.66L124 169.66V240a4 4 0 0 0 8 0v-70.34l25.17 25.17a4 4 0 0 0 5.66-5.66Z");
}
</style><path class="iy39ukbvk"/>`,
		"fallback": "ph:arrows-in-line-vertical-thin",
	});
}

export default Component;
