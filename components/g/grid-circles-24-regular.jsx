import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.naqtbfqpz {
  fill: currentColor;
  d: path("M11 7a4 4 0 1 0-8 0a4 4 0 0 0 8 0M9.5 7a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0M21 7a4 4 0 1 0-8 0a4 4 0 0 0 8 0m-1.5 0a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0M7 21a4 4 0 1 1 0-8a4 4 0 0 1 0 8m0-1.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5M21 17a4 4 0 1 0-8 0a4 4 0 0 0 8 0m-1.5 0a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0");
}
</style><path class="naqtbfqpz"/>`,
		"fallback": "fluent:grid-circles-24-regular",
	});
}

export default Component;
