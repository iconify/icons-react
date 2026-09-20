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
		"content": `<style>.hae7ddcce {
  fill: currentColor;
  d: path("M7.5 13a.5.5 0 0 0 0 1h6a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-1 0v4.793L2.854 2.146a.5.5 0 1 0-.708.708L12.293 13z");
}
</style><path class="hae7ddcce"/>`,
		"fallback": "fluent:arrow-down-right-16-regular",
	});
}

export default Component;
