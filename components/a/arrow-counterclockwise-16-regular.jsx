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
		"content": `<style>.nqv1_5isg {
  fill: currentColor;
  d: path("M13 8a5 5 0 0 0-9.001-3h2a.5.5 0 1 1 0 1H3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 1 0v1.531a6 6 0 1 1-1.476 4.513a.5.5 0 0 1 .997-.089A5 5 0 0 0 13 8");
}
</style><path class="nqv1_5isg"/>`,
		"fallback": "fluent:arrow-counterclockwise-16-regular",
	});
}

export default Component;
