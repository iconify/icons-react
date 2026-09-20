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
		"content": `<style>.o6skdbbrk {
  fill: currentColor;
  d: path("M42.34 77.66a8 8 0 0 1 11.32-11.32L128 140.69l74.34-74.35a8 8 0 0 1 11.32 11.32l-80 80a8 8 0 0 1-11.32 0ZM208 184H48a8 8 0 0 0 0 16h160a8 8 0 0 0 0-16");
}
</style><path class="o6skdbbrk"/>`,
		"fallback": "ph:caret-line-down",
	});
}

export default Component;
