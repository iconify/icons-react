import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.hyzcm7ixf {
  fill: currentColor;
  d: path("M10.78 1.22a.75.75 0 0 1 0 1.06L3.56 9.5h3.69a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75v-5.5a.75.75 0 0 1 1.5 0v3.69l7.22-7.22a.75.75 0 0 1 1.06 0");
}
</style><path class="hyzcm7ixf"/>`,
		"fallback": "fluent:arrow-down-left-12-filled",
	});
}

export default Component;
