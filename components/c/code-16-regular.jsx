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
		"content": `<style>.nh52s1x0e {
  fill: currentColor;
  d: path("M10.033 1.32a.5.5 0 0 1 .934.36l-5 13a.5.5 0 0 1-.934-.36zM3.647 4.646a.5.5 0 0 1 .707.707L1.707 8l2.647 2.646a.5.5 0 0 1-.707.707l-3-3a.5.5 0 0 1 0-.707zm8 0a.5.5 0 0 1 .707 0l3 3a.5.5 0 0 1 0 .707l-3 3a.5.5 0 0 1-.707-.707L14.293 8l-2.646-2.647a.5.5 0 0 1 0-.707");
}
</style><path class="nh52s1x0e"/>`,
		"fallback": "fluent:code-16-regular",
	});
}

export default Component;
