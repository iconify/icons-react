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
		"content": `<style>.k_38fcb4e {
  fill: currentColor;
  d: path("M178.83 173.17a4 4 0 0 1 0 5.66l-48 48a4 4 0 0 1-5.66 0l-48-48a4 4 0 0 1 5.66-5.66L128 218.34l45.17-45.17a4 4 0 0 1 5.66 0m-96-90.34L128 37.66l45.17 45.17a4 4 0 1 0 5.66-5.66l-48-48a4 4 0 0 0-5.66 0l-48 48a4 4 0 0 0 5.66 5.66");
}
</style><path class="k_38fcb4e"/>`,
		"fallback": "ph:caret-up-down-thin",
	});
}

export default Component;
