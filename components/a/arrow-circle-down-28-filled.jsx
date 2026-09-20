import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.o-mhdrisf {
  fill: currentColor;
  d: path("M14 2C7.373 2 2 7.373 2 14s5.373 12 12 12s12-5.373 12-12S20.627 2 14 2M8.97 14.22a.75.75 0 0 1 1.06 0l3.22 3.22V8.75a.75.75 0 0 1 1.5 0v8.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 0 1 0-1.06");
}
</style><path class="o-mhdrisf"/>`,
		"fallback": "fluent:arrow-circle-down-28-filled",
	});
}

export default Component;
