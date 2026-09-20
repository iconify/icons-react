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
		"content": `<style>.m1dlevb-w {
  fill: currentColor;
  d: path("M208 232a8 8 0 0 1-8 8H56a8 8 0 0 1 0-16h144a8 8 0 0 1 8 8M80 192V40a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v152a16 16 0 0 1-16 16H96a16 16 0 0 1-16-16m16 0h64V40H96Z");
}
</style><path class="m1dlevb-w"/>`,
		"fallback": "ph:align-bottom-simple",
	});
}

export default Component;
