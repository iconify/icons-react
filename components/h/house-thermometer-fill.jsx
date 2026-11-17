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
		"content": `<style>.ucf7e6bko {
  fill: currentColor;
  d: path("M18 22H6a3 3 0 0 1-3-3v-8.092c0-.866.373-1.689 1.024-2.258l6-5.25a3 3 0 0 1 3.952 0l6 5.25A3 3 0 0 1 21 10.908V19a3 3 0 0 1-3 3m-3.5-8.528V9.5a2.5 2.5 0 1 0-5 0v3.972a3.25 3.25 0 1 0 5 0m-2-3.972v4.373c0 .285.121.556.333.745a1.25 1.25 0 1 1-1.666 0a1 1 0 0 0 .333-.745V9.5a.5.5 0 0 1 1 0");
}
</style><path class="ucf7e6bko"/>`,
		"fallback": "coolicons:house-thermometer-fill",
	});
}

export default Component;
