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
		"content": `<style>.x0b81owrb {
  fill: currentColor;
  d: path("M140 128a12 12 0 1 1-12-12a12 12 0 0 1 12 12");
}
</style><path class="x0b81owrb"/>`,
		"fallback": "ph:dot",
	});
}

export default Component;
